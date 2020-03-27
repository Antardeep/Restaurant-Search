import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SreachBar';

const Main = () => {
    const [ searchValue, setSearchValue ] = useState('');

    return( 
        <View style = {styles.backGround}>
            <SearchBar s
            earchValue= {searchValue} 
            onSearchValueChange = {newValue => setSearchValue(newValue)}
            onSearchSubmit = {() => console.log(`done... ${searchValue}`)}/>
            <Text>Main</Text>
        </View>
    )
};

const styles = StyleSheet.create({
 backGround: {
     backgroundColor: 'white',
     flex: 1

 }
});

export default Main;