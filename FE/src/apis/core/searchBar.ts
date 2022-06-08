import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.125.195.119/api/accommodations',
  timeout: 3000,
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
