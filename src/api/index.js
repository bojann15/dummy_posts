import axios from 'axios';

const API = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
        'Content-type': 'application/json',
        'app-id': '616e6a30354fcd821ce25582'
    }
});

export default API;