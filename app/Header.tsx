import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Whatsapp</Text>
            <View style={styles.iconContainer}>
                <Feather name='camera' size={24} color="white" style={styles.icon}/>
                <Fontisto name='search' size={24} color="white" style={styles.icon}/>
                <MaterialCommunityIcons name='dots-vertical' size={24} color="white" style={styles.icon}/>
            </View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: 80,
        paddingBottom: 8,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    icon: {
        marginLeft: 20
    }
});