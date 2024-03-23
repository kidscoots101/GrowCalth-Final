import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const MoreQuotes = () => {
    const [quotes, setQuotes] = useState("")
    const [Quote, setQuote] = useState();
    const [Author, setAuthor] = useState();
    const getQuote = () => {

        fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        setQuote(result.content)
        setAuthor(result.author)
    })
    }
    useEffect(() => {
        getQuote();
    }, []);
    return (
        <View style={styles.container}>
          <Text style={styles.quoteText}>{Quote}</Text>
          <Text style={styles.authorText}>{Author}</Text>
        </View>
      );
    };
    
    export default MoreQuotes;
    
    const { width } = Dimensions.get('window');
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        width: width - 26,
        margin: 13,
        marginTop: 10,
      },
      quoteText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#100F0F',
      },
      authorText: {
        fontStyle: 'italic',
        fontWeight: '600',
        fontSize: 17,
        color: '#100F0F',
        textDecorationLine: 'underline',
        marginTop: 5,
      },
    });