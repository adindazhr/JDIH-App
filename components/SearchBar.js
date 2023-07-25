import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function SearchBar() {
    return (
        <TextInput style={styles.searchbar} placeholder='Cari Peraturan'/>
    );
}

const styles = StyleSheet.create({
    searchbar: {
        marginTop: 20,
        backgroundColor: '#fff',
        color: '#3F1871',
        padding: 10,
        borderRadius: 50,
        width: 250,
        fontSize: 12
      },
});