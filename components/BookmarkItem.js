import React from "react";
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const BookmarkItem = () => {
    return (
        <View style={styles.cardContainer}>
            <Text>Bookmark Card</Text>
        </View>
    );
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth,
        backgroundColor: '#E9F1FF'
    }
})

export default BookmarkItem;