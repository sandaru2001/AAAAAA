import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Chat from './screen/Chat'
import Status from './screen/Status'
import Calls from './screen/Calls'
import Community from './screen/Community'

const Tab = createMaterialTopTabNavigator();

const navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Chat"
    screenOptions={{
      tabBarActiveTintColor: '#fff',
      tabBarIndicatorStyle: {
        backgroundColor: '#fff',
      },
      tabBarLabelStyle: {
        fontweight: 'bold',
      },
      tabBarStyle: {
        backgroundColor: '#0e806a',
      },
    }}>
      <Tab.Screen name="Chat" component={Chat} options={{
        tabBarIcon: ({ color }) => {
           <MaterialCommunityIcons name="chat" size={24} color={color} />
        },
        
      }}
      />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  )
}

export default navigation

const styles = StyleSheet.create({
    tabBarLabel : {
      display: 'none'
    }
});