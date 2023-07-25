import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import List from '../../components/Category';

export default function CategoryScreen({navigation}) {

    const [jenisHukum, setJenisHukum] = useState([]);

    useEffect(() => {
        fetch('https://jdih.dephub.go.id/api/get-jenis-peraturan/?apiKey=qgI9KwT2Zz4QmX6igQeZaroYzHC9dwsDHkrmcHeoD4Br5kniajlm13c6MFuHblQAFq4FtvQ8GjvuGHlmZi')
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "ok") {
              setJenisHukum(data.jenisHukum);
            }
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    

    return(
        <View style={styles.container}>
            {/*Hedaer */}
            <Header/>
            <List jenisHukum={jenisHukum}/>
        
        </View>
    //     <View style={styles.container}>
    //   <Text>Daftar Jenis Hukum:</Text>
    //   <Text>Daftar Jenis Hukum:</Text>
    //   {jenisHukum.map((jenis) => 
    //   <Text key={jenis.id}>{jenis.nama}</Text>)}
    // </View>


    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    
  });