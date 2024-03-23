import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import firebase from 'firebase/compat';

const Info = ({route}) => {
    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('todos');
    const params = route.params
    const itemHeading = params.itemHeading
    const itemText = params.itemText

    return (
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
            <SafeAreaView>
            <Text style={styles.itemHeading}>{itemHeading}</Text>       
            </SafeAreaView>
        <ScrollView style={{flex: 1}}>
        <Text style={styles.itemText}>{itemText}</Text>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Info

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#486B02',
        padding:15,
        borderradius:15,
        margin:5,
        marginHorizontal:10,
    },
    innerContainer:{
        flexDirection:'column',
    },
    itemHeading:{
        fontWeight:'bold',
        color: 'black', // Changed to black: cant see anything
        fontSize: 25, 
        padding: 15
    },
    itemText:{
        fontWeight:'400',
        padding: 10, 
        fontSize: 18,
        marginHorizontal: 5
    }
})