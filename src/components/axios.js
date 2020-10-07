import axios from 'axios';

//base url to make requests to backend 
const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})
export default instance;