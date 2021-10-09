import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View } from 'react-native';

const Animacion3 = () => {
    const [animacion] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 40, // Al valor al que llega
            duration: 500, // Cantidad de tiempo en llegar
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <>
            <View>
                <Animated.Text style={[styles.texto, { fontSize: animacion }]}>
                    Animación 1
                </Animated.Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center',
    },
});

export default Animacion3;
