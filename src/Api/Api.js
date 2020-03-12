import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

const API_URLS = {
  LOGIN_USER: 'users/login',
  REGISTER_USER: 'users',
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

const isAuthorized = isLoggedIn => {
  if (isLoggedIn) {
    return true;
  }
  return false;
};

export const canActivate = isLoggedIn => show => {
  if (isAuthorized(isLoggedIn) && !show) {
    return false;
  }
  if (!isAuthorized(isLoggedIn) && show) {
    return false;
  }
  return true;
};
