import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
        <Image style={styles.icon} source={require('../assets/image1.png')} />
        <Image style={styles.icon} source={require('../assets/image2.png')} />
        <Text style={styles.sectionTitle}>KEMENTERIAN PERHUBUNGAN{"\n"}REPUBLIK INDONESIA</Text>
      </View>
    );
};

const styles= StyleSheet.create({
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#3F1871',
        margin: 4,
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
        margin: 4,
      },
});

export default Header;