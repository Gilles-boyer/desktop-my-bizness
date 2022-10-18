import axios from 'axios';
//import index from '../../store/index';


var api = axios.create({
    baseURL: `http://mybizness.herokuapp.com/api`,
    headers: {
        'Authorization': 'Bearer ',// + index.getters.token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Accept': 'application/json',
    },
    withCredentials : true
})

export default api;