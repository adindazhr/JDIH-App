import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Content2 from '../../components/Content2';


export default function SearchScreen({navigation}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [totalPages, setTotalPages] = useState(0); 
  
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
  
    const fetchAndConcatData = (pageNumber) => {
      return fetch(
        `https://jdih.dephub.go.id/api/get-peraturan?apiKey=qgI9KwT2Zz4QmX6igQeZaroYzHC9dwsDHkrmcHeoD4Br5kniajlm13c6MFuHblQAFq4FtvQ8GjvuGHlmZi&page=${pageNumber}`
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
        <View style={styles.search}><SearchBar/></View>
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
})