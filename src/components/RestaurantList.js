import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import RestaurantDetails from './RestaurantDetails';
import { withNavigation } from 'react-navigation';
import { Rating } from 'react-native-ratings';

const RestaurantList = ({ rating, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (
        <>
            <Rating
                startingValue={rating}
                ratingCount={5}
                imageSize={20}
                readonly={true}
                // showRating
                style={{margin: 10, alignItems: 'flex-start'}}
            />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
                            <RestaurantDetails restaurant={item} />
                        </TouchableOpacity>)
                }}
            />
        </>
    );
}

export default withNavigation(RestaurantList);