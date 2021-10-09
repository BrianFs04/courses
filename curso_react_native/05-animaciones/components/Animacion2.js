import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion2 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 450, // Al valor al que llega
            duration: 1000, // Cantidad de tiempo en llegar
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <>
            <Animated.View
                style={[styles.caja, { width: animacion, height: animacion }]}
            />
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

export default Animacion2;
