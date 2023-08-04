import React from "react";
import {ScrollView, StyleSheet, Text, View, Button, Linking } from 'react-native';

const TableRow = ({ title, content, isEven }) => {
    const rowStyle = isEven ? styles.evenRow : styles.oddRow;

    return (
      <View style={[styles.row, rowStyle]}>
        <View>
        <Text style={styles.titleContent}>{title}</Text>
        <Text>{content}</Text>
        </View>
      </View>
    );
  };
  
  const Metadata = ({data}) => {

    
    const handlePress = () => {
      Linking.openURL(data.urlDownloadPeraturan)
      // console.log(data.urlDownloadPeraturan)
    }

    return (
      <View style={styles.container}>
          <ScrollView vertical showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Metadata</Text>
          <View style={styles.table}>
          <TableRow title="Tipe Dokumen" content={data.jenisDokumen} isEven={false}/>
          <TableRow title="Judul" content={data.judul} isEven={true}/>
          <TableRow title="Tajuk Entri Utama" content={data.teuBadan} isEven={false}/>
          <TableRow title="Nomor Peraturan" content={data.noPeraturan} isEven={true}/>
          <TableRow title="Jenis/Bentuk Peraturan" content={data.jenis} isEven={false}/>
          <TableRow title="Singkatan Jenis/Bentuk Peraturan" content={data.singkatanJenis} isEven={true}/>
          <TableRow title="Tempat Penetapan" content={data.tempatTerbit} isEven={false}/>
          <TableRow title="Tanggal Penetapan" content={data.tanggalPengundangan} isEven={true}/>
          <TableRow title="Lokasi" content={data.lokasi} isEven={false}/>
          <TableRow title="Sumber" content={data.sumber} isEven={true}/>
          <TableRow title="Bahasa" content={data.bahasa} isEven={false}/>
          <TableRow title="Bidang Hukum" content={data.bidangHukum} isEven={true}/>
          <TableRow title="Status" content={data.status} isEven={false}/>
          <TableRow title="Subjek" content={data.subjek} isEven={true}/>
          {/* <TableRow title="File" content={data.urlDownloadPeraturan} isEven={false}/> */}
          <View style={[styles.row, styles.oddRow]}>
            <View>
            <Text style={styles.titleContent}>File</Text>
            <View marginVertical={5} >
              <Button title={data.namaFilePeraturan} onPress={handlePress}></Button>
            </View>
        </View>
      </View>
      </View>
      </ScrollView>
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
        margin: 10,
      },

      titleContent: {
        fontWeight:'bold',
      },

      space: {
        margin: 5,
      }
    
});

export default Metadata;