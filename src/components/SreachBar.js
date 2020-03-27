import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ searchValue, onSearchValueChange, onSearchSubmit }) => {
    return (
        <View style={styles.background}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.TextInput}
                placeholder='Search'
                value={searchValue}
                onChangeText={onSearchValueChange}
                onEndEditing={onSearchSubmit} />
            <TouchableOpacity onPress = {onSearchSubmit}>
                <EvilIcons name='search' style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        margin: 15,
        flexDirection: 'row',
    },
    TextInput: {
        flex: 1,
        margin: 7,
        padding: 10,
        fontSize: 20,
    },
    icon: {
        fontSize: 40,
        alignSelf: 'center',
        margin: 10,
        color: 'rgb(0,124,255)'
    }
});

export default SearchBar;