import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer S7DNpKPrsK-47I1KR0czU2YvZWh0SJVUfcPNv4yxI25Xcc-ALP0q8rHQujpl-SOoXTMLvm2__pssHBvOJV1iEOVyg6Xtjc_nn5821VCxR2q9a8AM8KrWXjzO4099XnYx'
    }
});