import axios from 'axios';
import index from '../../store/index';


var api = axios.create({
    baseURL: `http://localhost:8000/api`,
    headers: {
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

export default api;