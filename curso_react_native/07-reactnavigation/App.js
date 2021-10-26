import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Inicio"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#F4511E' },
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold' },
                    }}
                >
                    <Stack.Screen name="Inicio" component={Inicio} />
                    <Stack.Screen
                        name="Nosotros"
                        component={Nosotros}
                        options={({ route }) => ({
                            title: route.params.clienteId,
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
