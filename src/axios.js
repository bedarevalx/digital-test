import axios from 'axios';

const mapAxios = axios.create({
  baseURL: 'https://api.mapbox.com/',
});

mapAxios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    access_token: process.env.REACT_APP_MAPBOX_TOKEN,
  };
  return config;
});

export default mapAxios;
