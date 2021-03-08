import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://runner-a91ec-default-rtdb.firebaseio.com/'
});

export default instance;