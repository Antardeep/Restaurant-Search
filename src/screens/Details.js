import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import Yelp from '../api/Yelp';

const Details = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [singleResult, setSingleResult] = useState(null);

    useEffect(() => {
        getSingleResult(id)
    }, []);

    const getSingleResult = async id => {
        const result = await Yelp.get(`${id}`);
        setSingleResult(result.data)
    }

    if (!singleResult) {
        return null;
    }

    return (
        <View style={styles.view}>
            <Text style={styles.name}>{singleResult.name}</Text>
            <Text style={styles.name2, { color: 'black', fontFamily: 'Aramis-Italic', fontSize: 20 }}> ( {singleResult.alias} ) </Text>
            <Text style={styles.name2}>Price: {singleResult.price ? singleResult.price : '?'}     Reviews: {singleResult.review_count}</Text>
            <Rating
                startingValue={singleResult.rating}
                ratingCount={5}
                imageSize={25}
                readonly={true}
            />
            <View style={styles.view2}>
                <Text style={styles.name2, { fontSize: 20 }}> {singleResult.display_phone}</Text>
                <Text style={styles.name2, { fontSize: 15, textAlign: 'center' }}> {singleResult.location.display_address}</Text>
            </View>
            <FlatList
                // horizontal
                style={{ width: '100%' }}
                showsVerticalScrollIndicator={false}
                data={singleResult.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.image} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1
    },
    view2: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
        paddingTop: 20,
        paddingBottom: 20,
        // borderRadius: 20,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
        
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    name2: {
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.6)',
    },
    image: {
        flex: 1,
        width: null,
        height: 220,
        marginTop: 10,
        resizeMode: 'stretch'
    }
});

export default Details;