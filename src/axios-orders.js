import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-81315.firebaseio.com/'
});

export default instance