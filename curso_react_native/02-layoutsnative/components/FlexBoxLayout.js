import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
    return (
        <>
            <View style={styles.contenedor}>
                <View style={styles.caja1} />
                <View style={styles.caja2} />
                <View style={styles.caja3} />
                <View style={styles.caja4} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: 'cornflowerblue',
        flex: 1, // El padre tiene que extenderse para que los hijos puedan hacerlo
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // En la dirección row (de izquierda a derecha)
        // alignItems centra verticalmente y justifyContent centra horizontalmente
        justifyContent: 'center',
        alignItems: 'center',
        // En la dirección column (de arriba hacía abajo) por default
        // alignItems centra horizontalmente y justifyContent centra verticalmente
    },
    caja1: {
        padding: 20,
        backgroundColor: 'navy',
    },
    caja2: {
        padding: 20,
        backgroundColor: 'yellow',
    },
    caja3: {
        padding: 20,
        backgroundColor: 'green',
    },
    caja4: {
        padding: 20,
        backgroundColor: 'teal',
    },
});

export default FlexBoxLayout;
