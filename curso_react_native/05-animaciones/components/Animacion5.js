import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';

const Animacion5 = () => {
    const [animacion] = useState(new Animated.Value(1));

    const presionarBtn = () => {
        Animated.spring(animacion, {
            toValue: 0.8,
            useNativeDriver: false,
        }).start();
    };

    const soltarBtn = () => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 4,
            tension: 10,
            useNativeDriver: false,
        }).start();
    };

    const estiloAnimacion = {
        transform: [{ scale: animacion }],
    };

    return (
        <>
            <View style={styles.contenedor}>
                <TouchableWithoutFeedback
                    onPressIn={() => presionarBtn()}
                    onPressOut={() => soltarBtn()}
                >
                    <Animated.View style={[styles.btn, estiloAnimacion]}>
                        <Text style={styles.texto}>Iniciar sesión</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28,
    },
});
export default Animacion5;
