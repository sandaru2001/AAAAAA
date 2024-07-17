import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const navigation = () => {
  return (
    <View>
      <Text>navigation</Text>
    </View>
  )
}

export default navigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});