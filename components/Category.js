import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FlatButton = ({text}) => {

  const navigation = useNavigation();

  const onPress = () => {
    console.log({text});
    navigation.navigate('Search', {url: ""});
  }
  

  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  );
};

const List = ({jenisHukum}) => {
  return (
  <View style={styles.list}>
    <Text style={styles.title}>Kategori</Text>
    
    {jenisHukum.map((jenis) => 
      <FlatButton key={jenis.id }text={jenis.nama}/>)}
      
  </View>
    
  );
};

const styles= StyleSheet.create({
    button: {
      borderRadius: 5,
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: '#E9F1FF',
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      elevation: 5,
    },

    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    },

    list: {
      marginHorizontal: 20,
    },

    title: {
      color: '#3F1871',
      fontWeight: 'bold',
      fontSize: 24,
      marginVertical: 10,
    },

});

export default List;