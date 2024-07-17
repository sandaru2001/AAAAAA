import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import Header from './Header'
import Navigation from './Navigation'

const App = () => {
  return (
    <NavigationContainer>
        <View style={styles.container}>
            <StatusBar backgroundColor='#0e806a' /> 
            <Header />

            <View style={{ flex: 1, backgroundColor: '#ffff'}}>
                <Navigation />
            </View>
        </View>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});