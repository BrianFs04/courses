import React, { useEffect, useState } from 'react';
import { FlatList, View, Platform } from 'react-native';
import { List, Headline, Button, FAB } from 'react-native-paper';
import axios from 'axios';

import globalStyles from '../styles/global';

const Inicio = ({ navigation }) => {
    // state de la app
    const [clientes, setClientes] = useState([]);
    const [consultarAPI, setConsultarAPI] = useState(true);

    useEffect(() => {
        const obtenerClientesAPI = async () => {
            let url;
            if (Platform.OS === 'ios') {
                url = 'http://localhost:3000/clientes';
            } else {
                url = 'http://10.0.2.2:3000/clientes';
            }
            try {
                const resultado = await axios.get(url);
                setClientes(resultado.data);
                setConsultarAPI(false);
            } catch (error) {
                console.log(error);
            }
        };

        if (consultarAPI) {
            obtenerClientesAPI();
        }
    }, [consultarAPI]);

    return (
        <View style={globalStyles.contenedor}>
            <Button
                icon="plus-circle"
                onPress={() =>
                    navigation.navigate('NuevoCliente', { setConsultarAPI })
                }
            >
                Nuevo Cliente
            </Button>
            <Headline style={globalStyles.titulo}>
                {clientes.length ? 'Clientes' : 'Aún no hay clientes'}
            </Headline>
            <FlatList
                data={clientes}
                keyExtractor={cliente => cliente.id.toString()}
                renderItem={({ item }) => (
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                        onPress={() =>
                            navigation.navigate('DetallesCliente', {
                                item,
                                setConsultarAPI,
                            })
                        }
                    />
                )}
            />
            <FAB
                icon="plus"
                color="#FFF"
                style={globalStyles.fab}
                onPress={() =>
                    navigation.navigate('NuevoCliente', { setConsultarAPI })
                }
            />
        </View>
    );
};

export default Inicio;
