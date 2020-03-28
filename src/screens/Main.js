import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import * as Font from 'expo-font';

import SearchBar from '../components/SreachBar';
import useResult from '../Hooks/useResult';
import RestaurantList from '../components/RestaurantList';

const Main = () => {
    const [searchValue, setSearchValue] = useState('');
    const [ onSearchPress, error, searchResult ] = useResult();

    const filterRating = (rating) => {
        return searchResult.filter(searchResult => {
            return searchResult.rating === rating;
        });
    }

    const fetchFonts = () => {
        return Font.loadAsync({
        'RacingSansOne-Regular': require('../../assets/fonts/RacingSansOne-Regular.ttf'),
        'Aramis-Italic': require('../../assets/fonts/Aramis-Italic.ttf'),
        // 'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
        });
        };
      
        useEffect(() => {
          fetchFonts()
      }, []);
  
    return (
        <View style={styles.backGround}>
            <SearchBar
                searchValue={searchValue}
                onSearchValueChange={newValue => setSearchValue(newValue)}
                onSearchSubmit={() => onSearchPress(searchValue)} />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
            <RestaurantList rating='5' results={filterRating(5)} />
            <RestaurantList rating='4.5' results={filterRating(4.5)} />
            <RestaurantList rating='4' results={filterRating(4)} />
            <RestaurantList rating='3.5' results={filterRating(3.5)} />
            <RestaurantList rating='3' results={filterRating(3)} />
            <RestaurantList rating='2.5' results={filterRating(2.5)} />
            <RestaurantList rating='2' results={filterRating(2)} />
            <RestaurantList rating='1' results={filterRating(1)} />
            <RestaurantList rating='0' results={filterRating(0)} />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    backGround: {
        backgroundColor: 'white',
        flex: 1,
    }
});

export default Main;