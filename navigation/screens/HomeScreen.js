import React from 'react';
import { useEffect,useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Content from '../../components/Content';
import Header from '../../components/Header';

const HomeScreen = ({navigation}) => {
  const [peraturans, setPeraturan] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jdih.dephub.go.id/api/get-peraturan?apiKey=qgI9KwT2Zz4QmX6igQeZaroYzHC9dwsDHkrmcHeoD4Br5kniajlm13c6MFuHblQAFq4FtvQ8GjvuGHlmZi")
      .then((resp) => resp.json())
      .then((json) => setPeraturan(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return(
      <View style={styles.container}>
      {/*Header */}
      <Header /> 

      {/* Search */}
      <View style={styles.searchContainer}>

        <Text style={styles.greetings}>Selamat Datang di JDIH{"\n"}Kementerian Perhubungan</Text>
        <SearchBar/>

      </View>
      {/* <Section /> */}
      {/* <Text style={styles.sectionTitle}>Peraturan Terbaru</Text>
      <Text style={styles.sectionTitle}>Lainnya</Text>
      <Content/>

      <Text style={styles.sectionTitle}>Peraturan Dicabut Terbaru</Text>
      <Content/> */}

      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          peraturans.map((post) => {
            return (
              <View>
                <Text>{post.peraturans.judul}</Text>
                <Text>{post.peraturans.body}</Text>
              </View>
            );
          })
        )}
      </View>;

      </View>
  );
};

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
      fontSize: 16,
      fontWeight: 'bold',
      color: '#3F1871',
      margin: 10,
    },
    items: {},
  
    header: {
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

  export default HomeScreen;