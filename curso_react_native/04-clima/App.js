import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

const App = () => {
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: '',
    });

    const [consultar, setConsultar] = useState(false);
    const [resultadoAPI, setResultadoAPI] = useState({});
    const [bgColor, setBgColor] = useState('rgb(71, 149, 212)');
    const [cargando, setCargando] = useState(false);

    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarClima = async () => {
            if (consultar) {
                const appId = 'c8bfa55bf563cb5b3871a0d25223f57f';
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    setCargando(true);

                    setTimeout(() => {
                        setResultadoAPI(resultado);
                        setConsultar(false);
                        setCargando(false);
                    }, 3000);

                    // Modifica el color de fondo según la temperatura
                    const kevil = 273.15;
                    const { main } = resultado;
                    const actual = main.temp - kevil;

                    if (actual < 10) {
                        setBgColor('rgb(105, 108, 149)');
                    } else if (actual >= 10 && actual < 25) {
                        setBgColor('rgb(71, 149, 212)');
                    } else {
                        setBgColor('rgb(178, 28, 61)');
                    }
                } catch (error) {
                    mostrarAlerta();
                }
            }
        };

        consultarClima();
    }, [consultar]);

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'No hay resultados, intenta con otra ciudad o país',
            [{ text: 'ok' }],
        );
    };

    const ocultarTeclado = () => {
        Keyboard.dismiss();
    };

    const bgColorApp = {
        backgroundColor: bgColor,
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
                <View style={[styles.app, bgColorApp]}>
                    <View style={styles.contenido}>
                        <Clima resultadoAPI={resultadoAPI} />
                        <Formulario
                            busqueda={busqueda}
                            setBusqueda={setBusqueda}
                            setConsultar={setConsultar}
                            cargando={cargando}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
    },
    contenido: {
        marginHorizontal: '2.5%',
    },
});

export default App;
