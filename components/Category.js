import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const FlatButton = ({text}) => {
  const onPress = () => console.log("pressed");

  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  );
};

const List = () => {
  return (
  <View style={styles.list}>
    <Text style={styles.title}>Kategori</Text>
    <FlatButton text='Category'/>
    <FlatButton text='Category'/>
    <FlatButton text='Category'/>
    <FlatButton text='Category'/>
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