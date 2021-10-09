import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View } from 'react-native';

const Animacion4 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 360, // Al valor al que llega
            duration: 500, // Cantidad de tiempo en llegar
            useNativeDriver: false,
        }).start();
    }, []);

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    });

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }],
    };

    return (
        <>
            <Animated.View style={[styles.caja, estiloAnimacion]} />
        </>
    );
};

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue',
    },
});

export default Animacion4;
