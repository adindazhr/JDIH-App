import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TextInput } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Content2 from '../../components/Content2';
import Icon from 'react-native-vector-icons/Ionicons';


export default function SearchScreen({navigation, route}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [text, setText] = useState("");
  
    useEffect(() => {
      fetchData();
    }, []);
  
    useEffect(() => {
      if (page > 1) {
        fetchMoreData();
      }
    }, [page]);
  
    const fetchData = () => {
      fetchAndConcatData(page).then((result) => {
        setData(result.data);
        setTotalPages(result.totalPages);
        setLoading(false);
      });
    };
  
    const fetchMoreData = () => {
      fetchAndConcatData(page).then((result) => {
        setData((prevData) => [...prevData, ...result.data]);
        setIsFetching(false);
      });
    };
  
    const handleLoadMore = () => {
      if (!isFetching && page < totalPages) {
        setIsFetching(true);
        setPage((prevPage) => prevPage + 1);
        // {console.log(totalPages)}
      }
    };

    const handleSubmit = (pageNumber) => {
      console.log(text);
      return fetch(
        `https://jdih.dephub.go.id/api/get-peraturan?apiKey=qgI9KwT2Zz4QmX6igQeZaroYzHC9dwsDHkrmcHeoD4Br5kniajlm13c6MFuHblQAFq4FtvQ8GjvuGHlmZi&page=${pageNumber}&qq=${text}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'ok') {
            return {
              data: data.peraturans,
              totalPages: data.totalPage || 1,
            };
          } else {
            return {
              data: [],
              totalPages: 1,
            };
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          return {
            data: [],
            totalPages: 1,
          };
        });
  }
  
    const fetchAndConcatData = (pageNumber) => {
      return fetch(
        `https://jdih.dephub.go.id/api/get-peraturan?apiKey=qgI9KwT2Zz4QmX6igQeZaroYzHC9dwsDHkrmcHeoD4Br5kniajlm13c6MFuHblQAFq4FtvQ8GjvuGHlmZi&page=${pageNumber}${route.params.url}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'ok') {
            return {
              data: data.peraturans,
              totalPages: data.totalPage || 1,
            };
          } else {
            return {
              data: [],
              totalPages: 1,
            };
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          return {
            data: [],
            totalPages: 1,
          };
        });
    };
  
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.search}>
          <View style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="search" size={20} color="#3F1871"/>
              <TextInput style={styles.input} 
              placeholder='Cari Peraturan' underlineColorAndroid="transparent" 
              // value={text}
              onChangeText={setText}
              onSubmitEditing={handleSubmit}
              />
          </View>
        </View>
        <View style={styles.space} >
        <FlatList
          data={data}
          renderItem={({ item }) => <Content2 peraturan={item} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={isFetching ? <ActivityIndicator size="large" color="#000" /> : null}
        />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    item: {
      fontSize: 16,
      padding: 10,
    },

    search: {
        alignItems: 'center',
    },

    space: {
        alignItems: 'center',
        margin: 15,
    },
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
})