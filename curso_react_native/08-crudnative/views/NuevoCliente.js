import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {
    TextInput,
    Headline,
    Button,
    Dialog,
    Paragraph,
    Portal,
} from 'react-native-paper';
import axios from 'axios';

import globalStyles from '../styles/global';

const NuevoCliente = ({ navigation, route }) => {
    const { setConsultarAPI } = route.params;

    // Campos formulario
    const [data, setData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        empresa: '',
    });
    const [alerta, setAlerta] = useState(false);

    const { nombre, telefono, correo, empresa } = data;

    // Detectar si estamos editando o no
    useEffect(() => {
        if (route.params.cliente) {
            const { cliente } = route.params;
            setData({
                ...data,
                nombre: cliente.nombre,
                telefono: cliente.telefono,
                correo: cliente.correo,
                empresa: cliente.empresa,
            });
        }
    }, []);

    // Almacena el cliente en la BD
    const guardarCliente = async () => {
        // Validar
        if (!nombre || !telefono || !correo || !empresa) {
            setAlerta(true);
            return;
        }
        // Generar el cliente
        const cliente = { nombre, telefono, correo, empresa };

        // Si estamos editando o  creando un nuevo cliente
        if (route.params.cliente) {
            const { id } = route.params.cliente;
            cliente.id = id;
            let url;
            if (Platform.OS === 'ios') {
                url = `http://localhost:3000/clientes/${id}`;
            } else {
                url = `http://10.0.2.2:3000/clientes/${id}`;
            }
            try {
                await axios.put(url, cliente);
            } catch (error) {
                console.log(error);
            }
        } else {
            // Guardar el cliente en la API
            try {
                if (Platform.OS === 'ios') {
                    await axios.post('http://localhost:3000/clientes', cliente);
                } else {
                    // Para Android
                    await axios.post('http://10.0.2.2:3000/clientes', cliente);
                }
            } catch (error) {
                console.log(error);
            }
        }

        // Redireccionar
        navigation.navigate('Inicio');

        // Limpiar el form
        setData({ ...data, nombre: '', telefono: '', correo: '', empresa: '' });

        // Cambiar a true para traernos el nuevo cliente
        setConsultarAPI(true);
    };

    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>
                {route.params.cliente
                    ? 'Editar cliente'
                    : 'Añadir nuevo cliente'}
            </Headline>
            <TextInput
                label="Nombre"
                placeholder="Juan"
                onChangeText={val => setData({ ...data, nombre: val })}
                value={nombre}
                style={styles.input}
            />
            <TextInput
                label="Teléfono"
                placeholder="1234455678"
                onChangeText={val => setData({ ...data, telefono: val })}
                value={telefono}
                style={styles.input}
            />
            <TextInput
                label="Correo"
                placeholder="correo@correo.com"
                onChangeText={val => setData({ ...data, correo: val })}
                value={correo}
                style={styles.input}
            />
            <TextInput
                label="Empresa"
                placeholder="Nombre empresas"
                onChangeText={val => setData({ ...data, empresa: val })}
                value={empresa}
                style={styles.input}
            />
            <Button
                icon="pencil-circle"
                mode="contained"
                onPress={() => guardarCliente()}
            >
                Guardar cliente
            </Button>
            <Portal>
                <Dialog visible={alerta} onDismiss={() => setAlerta(false)}>
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setAlerta(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
});

export default NuevoCliente;
