import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

const API_URLS = {
  LOGIN_USER: 'users/login',
  REGISTER_USER: 'users',
  ARTICLES_LIST: 'articles',
};

export const signUp = async user => {
  return axiosInstance.post(`${API_URLS.REGISTER_USER}`, user);
};

export const signIn = async user => {
  return axiosInstance.post(`${API_URLS.LOGIN_USER}`, user);
};

export const addUserToLocalStorage = usr => {
  localStorage.setItem('user', JSON.stringify(usr));
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const getArticlesList = (offset = 0) => {
  return axiosInstance.get(`${API_URLS.ARTICLES_LIST}`, { params: { limit: 10, offset } });
};
