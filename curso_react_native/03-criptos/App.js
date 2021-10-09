import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';

const App = () => {
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [consultarApi, setConsultarAPI] = useState(false);
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const cotizarCriptomoneda = async () => {
            if (consultarApi) {
                // Consultar la API para obtener la cotización
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
                const response = await axios.get(url);
                setCargando(true);
                // Ocultar el spinner y mostrar el resultado
                setTimeout(() => {
                    setResultado(response.data.DISPLAY[criptomoneda][moneda]);
                    setConsultarAPI(false);
                    setCargando(false);
                }, 3000);
            }
        };
        cotizarCriptomoneda();
    }, [consultarApi, moneda, criptomoneda]);

    // Mostrar el spinner o el resultador
    const componente = cargando ? (
        <ActivityIndicator size="large" color="#5E49E2" />
    ) : (
        <Cotizacion resultado={resultado} />
    );
    return (
        <>
            <ScrollView>
                <Header />
                <Image
                    style={styles.imagen}
                    source={require('./assets/img/cryptomonedas.png')}
                />
                <View style={styles.contenido}>
                    <Formulario
                        moneda={moneda}
                        criptomoneda={criptomoneda}
                        setMoneda={setMoneda}
                        setCriptomoneda={setCriptomoneda}
                        setConsultarAPI={setConsultarAPI}
                    />
                </View>
                <View style={{ marginTop: 40 }}>{componente}</View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    imagen: {
        width: '100%',
        height: 150,
        marginHorizontal: '2.5%',
    },
    contenido: {
        marginHorizontal: '2.5%',
    },
});

export default App;
