import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import DATA from '../data/chat'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Chat = () => {
  const [chat, setData] = useState(DATA)

  useEffect(() => {
    setData(DATA)
  })
  return (
    <View style={styles.container}>
      {/* <FlatList 
        data={chat}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.ChatContainer}>
            <Image source={item.photos} style={styles.image}/>
            <View style={styles.ChatContent}>
              <View style={styles.ChatHeader}>
                <Text style={styles.ChatName}>{item.name}</Text>
                <Text style={styles.ChatTime}>{item.name}</Text>
              </View>
            </View>
          </View>
        )}

      /> */}

        
        <View style={styles.chat}>
          <Image source={{uri:'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'}} width={50}  height={50}/>
          <Text>Name</Text>
        </View>

    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  chat:{
    flexDirection: 'row'    
  },




    container: {
        flex: 1,
        marginTop: 16,
    },
    ChatContainer: {
      flexDirection: 'row',
      marginRight: 16,
      marginLeft: 16
    },
    image: {
      width: 50,
      height: 50,
      backgroundColor: '#128C7E',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    ChatContent: {
      flex: 5,
      borderBottomWidth: 0,
      marginLeft: 16,
      paddingBottom: 16,
      marginBottom: 13
    },
    ChatHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 2,
      marginTop: 4
    },
    ChatName: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    ChatTime: {
      fontSize: 12,
      color: '#A0A09E'
    }
});