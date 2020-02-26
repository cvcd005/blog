import axios from 'axios';

const API_URLS = {
  BASE_URl: 'https://conduit.productionready.io/api/',
  LOGIN_USER: 'users/login',
};

export const signUp = async user => {
  return axios.post(`${API_URLS.BASE_URl}/${API_URLS.REGISTER_USER}`, user);
};

export const signIn = async user => {
  return axios.post(`${API_URLS.BASE_URl}/${API_URLS.LOGIN_USER}`, user);
};
