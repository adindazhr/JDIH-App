import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const TableRow = ({ data, isEven }) => {
    const rowStyle = isEven ? styles.evenRow : styles.oddRow;
  
    return (
      <View style={[styles.row, rowStyle]}>
        <View>
        <Text style={styles.titleContent}>{data.column1}</Text>
        <Text>{data.column2}</Text>
        </View>
      </View>
    );
  };
  
  const Metadata = () => {

    const tableData = [
        { column1: 'Judul 1', column2: 'Data 1' },
        { column1: 'Judul 2', column2: 'Data 2' },
        { column1: 'Judul 3', column2: 'Data 3'},
      ];
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Metadata</Text>

        <View style={styles.table}>
        {tableData.map((rowData, index) => (
          <TableRow key={index} data={rowData} isEven={index % 2 === 0} />
        ))}
      </View>
      </View>
    );
  };
  

const styles= StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
    },

    table: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
        margin: 10,
      },
      row: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      oddRow: {
        backgroundColor: '#E9F1FF',
      },
      evenRow: {
        backgroundColor: '#fff',
      },
      
      title: {
        color: '#3F1871',
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10,
      },

      titleContent: {
        fontWeight:'bold',
      },
    
});

export default Metadata;