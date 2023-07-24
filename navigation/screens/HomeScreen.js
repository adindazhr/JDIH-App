import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Content from '../../components/Content';
import Header from '../../components/Header';

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
      {/*Hedaer */}
      <Header /> 

      {/* Search */}
      <View style={styles.search}>

        <Text style={styles.greetings}>Selamat Datang di JDIH{"\n"}Kementerian Perhubungan</Text>
        <SearchBar />

      </View>
      {/* <Section /> */}
      <Content/>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    search: {
      paddingVertical: 40,
      backgroundColor: '#3F1871',
      alignItems: 'center',
    },
  
    greetings: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      textShadowColor: '#FCDB00',
      textShadowOffset:{width: -1, height: 1},
      textShadowRadius: 10,
    },
  
    sectionTitle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#3F1871',
      margin: 4,
    },
    items: {},
  
    header: {
      // backgroundColor: '#fff',
      backgroundColor: '#D9D9D9',
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
    },
  
    icon: {
      padding: 10,
      margin: 4,
    },
  
    
  });