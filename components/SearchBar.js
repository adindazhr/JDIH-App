import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default function SearchBar() {
    return (
        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#3F1871"/>
            <TextInput style={styles.input} placeholder='Cari Peraturan' underlineColorAndroid="transparent"/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:50,
        width: 270,
        marginTop: 20,
    },
    searchIcon: {
        padding: 10,
        marginLeft: 5,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#3F1871',
        width: 200,
        borderRadius:50,
        fontSize: 15
    },
});