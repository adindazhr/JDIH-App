import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import List from '../../components/Category';

export default function CategoryScreen({navigation}) {
    return(
        <View style={styles.container}>
            {/*Hedaer */}
            <Header/>
            <List/>
        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    
  });