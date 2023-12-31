import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../../components/Header';
import BookmarkItem from '../../components/BookmarkItem';

export default function BookmarkScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Header />
            
            <Text style={{ paddingTop: 13, paddingLeft: 24, fontSize: 24, color: '#3F1871', fontWeight: 'bold'}}>
                Bookmark
            </Text>

            <BookmarkItem />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
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
        margin: 4,
      },
})