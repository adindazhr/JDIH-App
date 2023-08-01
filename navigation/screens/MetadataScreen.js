import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Header from "../../components/Header";
import Metadata from "../../components/Metadata";

const MetadataScreen = () => {
    return (
    <View style={styles.container}>
        <Header />    
        <Metadata />
    </View>

    );
};

const styles= StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#ffffff' 
      },

});

export default MetadataScreen;