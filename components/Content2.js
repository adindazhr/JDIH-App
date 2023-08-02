import React from 'react';
import { View, Text, StyleSheet,ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Content2 = ({peraturan}) => {
  return (
    <View key={peraturan.idData} style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title} numberOfLines={1}>{peraturan.noPeraturanFull}</Text>
      <View style={styles.validText}>
      {peraturan.status === 'Dicabut' ? <Icon name={"close-circle-outline"} color={"white"} size={18} marginLeft={5} marginVertical={1}/> : <Icon name={"checkmark-circle-outline"} color={"white"} size={18} marginLeft={5} marginVertical={1}/> }
      <Text style={styles.sts}>{peraturan.status}</Text>
      </View>
    </View>
    <View style={styles.descriptionContainer}>
      <Text style={styles.description} numberOfLines={3}>
        {peraturan.perihal}
      </Text>
    </View>
    <View style={styles.line} />
    <Text style={styles.date}>{peraturan.tanggalPengundangan}</Text>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9F1FF',
    padding: 16,
    paddingHorizontal: 18,
    height: 180,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  validText: {
    flexDirection: 'row',
    backgroundColor: 'green',
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: '#fff',
    borderRadius: 4,
  },
  dicabut: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: '#fff',
    borderRadius: 4,
  },
  descriptionContainer: {
    flex: 1,
    marginTop: 20,
  },
  description: {
    fontSize: 14,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  sts: {
    color: 'white',
    marginLeft: 5,
  }
});

export default Content2;