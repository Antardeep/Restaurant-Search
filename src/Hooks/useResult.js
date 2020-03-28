import { useState, useEffect } from 'react';
import Yelp from '../api/Yelp';

export default () => {
    const [searchResult, setSearchResult] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        onSearchPress('pasta');
    }, []);

    const onSearchPress = async value => {
        // serach API yelp with parameters in query string
        try {
            const result = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: value,
                    location: 'Brampton'
                }
            });
            setSearchResult(result.data.businesses);
        } catch (error) {
            setError(' Serach is Unsuccessful ');
        }
    }

    return [ onSearchPress, error, searchResult ];
};