import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

export default http;
