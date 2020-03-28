import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantDetails = ({ restaurant }) => {
    return(
        <View style={styles.view}>
            {restaurant.image_url ? <Image source={ {uri: restaurant.image_url} } style={styles.image}/> : null}
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.name2}>Price: {restaurant.price ? restaurant.price : '?'} Reviews: {restaurant.review_count }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
view:{
    margin: 10,
    backgroundColor: 'white',
    alignItems: "center"
},
image: {
    width: 250,
    height: 120,
    borderRadius: 5,

},
name: {
    fontSize: 16,
    fontWeight: 'bold',
    // fontFamily: 'RacingSansOne-Regular'
},
name2: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 12
}
});

export default RestaurantDetails;