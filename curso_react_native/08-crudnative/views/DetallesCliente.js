import React from 'react';
import { StyleSheet, View, Alert, Platform } from 'react-native';
import { Headline, Subheading, Text, Button, FAB } from 'react-native-paper';
import axios from 'axios';

import globalStyles from '../styles/global';

const DetallesCliente = ({ navigation, route }) => {
    const { nombre, telefono, correo, empresa, id } = route.params.item;
    const { setConsultarAPI } = route.params;

    const mostrarConfirmacion = () => {
        Alert.alert(
            '¿Deseas eliminar este cliente?', // título
            'Un contacto eliminado no se puede recuperar', // mensaje
            [
                { text: 'Sí, eliminar', onPress: () => eliminarContacto() },
                { text: 'Cancelar', style: 'cancel' },
            ],
        );
    };

    const eliminarContacto = async () => {
        let url;
        if (Platform.OS === 'ios') {
            url = `http://localhost:3000/clientes/${id}`;
        } else {
            url = `http://10.0.2.2:3000/clientes/${id}`;
        }
        try {
            await axios.delete(url);
        } catch (error) {
            console.log(error);
        }

        // Redireccionar
        navigation.navigate('Inicio');

        // Volver a consultar la API
        setConsultarAPI(true);
    };

    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{nombre}</Headline>
            <Text style={styles.texto}>
                Empresa: <Subheading>{empresa}</Subheading>
            </Text>
            <Text style={styles.texto}>
                Correo: <Subheading>{correo}</Subheading>
            </Text>
            <Text style={styles.texto}>
                Telefono: <Subheading>{telefono}</Subheading>
            </Text>
            <View style={styles.btnContenedor}>
                <FAB
                    icon="pencil"
                    style={styles.fabIcon}
                    color="#FFF"
                    onPress={() =>
                        navigation.navigate('NuevoCliente', {
                            cliente: route.params.item,
                            setConsultarAPI,
                        })
                    }
                />
                <Button
                    style={styles.btn}
                    mode="contained"
                    icon="cancel"
                    onPress={() => mostrarConfirmacion()}
                >
                    Eliminar Cliente
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    texto: {
        marginBottom: 20,
        fontSize: 18,
    },
    fabIcon: {
        backgroundColor: '#1774F2',
    },
    btnContenedor: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: '7%',
        marginHorizontal: '2.5%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    btn: {
        backgroundColor: 'red',
        width: '75%',
        marginBottom: '2.5%',
    },
});

export default DetallesCliente;
