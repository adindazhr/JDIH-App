import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Judul</Text>
        <Text style={styles.validText}>Berlaku</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description} numberOfLines={3}>
          Deskripsi
        </Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.date}>20 Juli 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9F1FF',
    padding: 16,
    paddingHorizontal: 18,
    width: 240,
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
    backgroundColor: 'green',
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
});

export default Content;