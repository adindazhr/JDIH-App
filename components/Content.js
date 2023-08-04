import React from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableWithoutFeedback  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Content = ({peraturan, loading}) => {

  const navigation = useNavigation();

  return (
     <View>
        {loading ? (
          <Text color='black'>Loading ...</Text>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {peraturan.map((post) => {
            return (
              <TouchableWithoutFeedback  onPress={()=>{navigation.navigate('Metadata', {data: post})}}>
                <View key={post.idData} style={styles.container}>
                  <View style={styles.header}>
                    <Text style={styles.title} numberOfLines={1}>{post.noPeraturanFull}</Text>
                    <View style={styles.validText}>
                    {post.status === 'Dicabut' ?  
                    <View style={styles.dicabut}>
                    <Icon name={"close-circle-outline"} color={"white"} size={18} marginLeft={5} marginVertical={1}/>
                    </View>
                    : <View style={styles.berlaku}>
                    <Icon name={"checkmark-circle-outline"} color={"white"} size={18} marginLeft={5} marginVertical={1}/> 
                    </View>}
                    </View>
                  </View>
                  <View style={styles.descriptionContainer}>
                    <Text style={styles.description} numberOfLines={3}>
                      {post.perihal}
                    </Text>
                  </View>
                  <View style={styles.line} />
                  <Text style={styles.date}>{post.tanggalPengundangan}</Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })}
          </ScrollView>
        )}
      </View> 
   
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9F1FF',
    padding: 16,
    paddingHorizontal: 18,
    width: 250,
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
  berlaku: {
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

export default Content;