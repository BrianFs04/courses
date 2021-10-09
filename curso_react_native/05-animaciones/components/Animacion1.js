import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion1 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1, // Al valor al que llega
            duration: 500, // Cantidad de tiempo en llegar
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <>
            <Animated.View style={{ opacity: animacion }}>
                <Text style={styles.texto}>Animación 1</Text>
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center',
    },
});

export default Animacion1;
