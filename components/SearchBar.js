import React, {useState}from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function SearchBar() {
    const [text, setText] = useState("");

    const navigation = useNavigation();

    const handleSubmit = () => {
        console.log(text);
        navigation.navigate('Search', {url: `&qq=${text}`})
    }

    return (
        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#3F1871"/>
            <TextInput style={styles.input} 
            placeholder='Cari Peraturan' underlineColorAndroid="transparent" 
            // value={text}
            onChangeText={setText}
            onSubmitEditing={handleSubmit}/>
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
        borderWidth: 1.5,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        
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