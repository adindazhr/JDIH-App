import {React, useEffect,useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Content from '../../components/Content';
import Header from '../../components/Header';

export default function HomeScreen({navigation}) {

  const [peraturan, setPeraturan] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jdih.dephub.go.id/api/get-peraturan?apiKey=qgI9KwT2Zz4QmX6igQeZaroYzHC9dwsDHkrmcHeoD4Br5kniajlm13c6MFuHblQAFq4FtvQ8GjvuGHlmZi")
      .then((response) => response.json())
      .then((data) => setPeraturan(data.peraturans))
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, []);

    return(
      <View style={styles.container}>
        {/*Hedaer */}
        <Header /> 

        {/* Search */}
        <View style={styles.searchContainer}>

          <Text style={styles.greetings}>Selamat Datang di JDIH{"\n"}Kementerian Perhubungan</Text>
          <SearchBar />

        </View>

        <ScrollView style={styles.content} vertical showsVerticalScrollIndicator={false}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Peraturan Terbaru</Text>
            <Text style={styles.lainnyaText} onPress={() => navigation.navigate('Search', {url: "&status=Berlaku"})}>lainnya</Text>
          </View>
          <Content peraturan={peraturan} loading={loading}/>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Peraturan Dicabut Terbaru</Text>
            <Text style={styles.lainnyaText} onPress={() => navigation.navigate('Search', {url: "&status=Dicabut"})}>lainnya</Text>
          </View>
          <Content peraturan={peraturan} loading={loading}/>
        </ScrollView>
      </View>
      
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  searchContainer: {
    paddingVertical: 40,
    backgroundColor: '#3F1871',
    alignItems: 'center',
  },

  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal:10
  },

  lainnyaText: {
    fontSize: 16,
    color: '#3F1871',
    textDecorationLine: 'underline'
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F1871',
  },

  content: {
    margin: 15,
  },

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