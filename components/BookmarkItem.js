import React from "react";
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BookmarkItem = () => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeadingContainer}>
                    <Text style={styles.cardTitle}>PM 30 Tahun 2023</Text>
                    <View style={styles.statusContainer}>
                        <Icon name={"checkmark-circle-outline"} color={"white"} size={18} marginLeft={5} marginVertical={1}/>
                        <Text style={styles.statusText}>Berlaku</Text>
                    </View>
                </View>
                <Text style={styles.cardDesc}>Pedoman Penyusunan Formasi Jabatan Fungsional Auditor Perkeretaapian</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeadingContainer}>
                    <Text style={styles.cardTitle}>PM 118 Tahun 2017</Text>
                    <View style={styles.statusContainer}>
                        <Icon name={"close-circle-outline"} color={"white"} size={18} marginLeft={5} marginVertical={1}/>
                        <Text style={styles.statusText}>Dicabut</Text>
                    </View>
                </View>
                <Text style={styles.cardDesc}>Penyelenggaraan Kereta Api Ringan Terintegrasi di Wilayah Jakarta, Bogor, Depok...</Text>
            </View>
        </View>
    );
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 51,
        height: 100,
        borderRadius: 5,
        marginLeft: 24,
        marginRight: 27,
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
    cardHeadingContainer: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 2,
        paddingBottom: 2, 
    },
    statusContainer: {
        backgroundColor: 'green',
        color: '#fff',
        borderRadius: 4,
        flex: 1,
        flexDirection: "row", 
        height: 22,
        marginLeft: 10,
    },
    statusText:{
        color: "white",
        marginLeft: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        width: deviceWidth - 170,
    },
    cardDesc: {
        paddingTop: 5,
        fontSize: 14,
    }
})

export default BookmarkItem;