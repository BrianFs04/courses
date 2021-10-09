import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = ({ busqueda, setBusqueda, setConsultar, cargando }) => {
    const { ciudad, pais } = busqueda;
    const [animacionboton] = useState(new Animated.Value(1));

    const consultarClima = () => {
        if (!ciudad.trim || !pais.trim) {
            mostrarAlerta();
            return;
        }
        setConsultar(true);
    };

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Agrega una ciudad y país para la búsqueda', [
            { text: 'Entendido' },
        ]);
    };

    //Animaciones
    const animacionEntrada = () => {
        Animated.spring(animacionboton, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    const animacionSalida = () => {
        Animated.spring(animacionboton, {
            toValue: 1,
            friction: 4, // Controlar el rebote (entre más bajo, más rebote)
            tension: 50, // Mientras menor sea el número más suave el movimiento
            useNativeDriver: true,
        }).start();
    };

    const estiloAnimacion = {
        transform: [{ scale: animacionboton }],
    };

    return (
        <>
            <View style={styles.Formulario}>
                <View>
                    <TextInput
                        value={ciudad}
                        style={styles.input}
                        onChangeText={value =>
                            setBusqueda({ ...busqueda, ciudad: value })
                        }
                        placeholder="Ciudad"
                        placeholderTextColor="#666"
                    />
                </View>
                <View>
                    <Picker
                        selectedValue={pais}
                        onValueChange={value =>
                            setBusqueda({ ...busqueda, pais: value })
                        }
                        style={styles.picker}
                        itemStyle={{
                            height: 120,
                            backgroundColor: '#FFF',
                        }}
                    >
                        <Picker.Item
                            label="-- Seleccione un país --"
                            value=""
                        />
                        <Picker.Item label="Estados Unidos" value="US" />
                        <Picker.Item label="México" value="MX" />
                        <Picker.Item label="Argentina" value="AR" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Costa Rica" value="CR" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Perú" value="PE" />
                    </Picker>
                </View>
                <TouchableWithoutFeedback
                    onPressIn={() => animacionEntrada()}
                    onPressOut={() => animacionSalida()}
                    onPress={() => consultarClima()}
                >
                    <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                        {cargando ? (
                            <ActivityIndicator size="large" color="#FFF" />
                        ) : (
                            <Text style={styles.textoBuscar}>Buscar Clima</Text>
                        )}
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    formulario: {
        marginTop: 100,
    },
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center',
    },
    textoBuscar: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18,
    },
    picker: {
        backgroundColor: '#FFF',
    },
});

export default Formulario;
