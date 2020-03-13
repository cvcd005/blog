import axios from 'axios';

const API_URLS = {
  LOGIN_USER: 'users/login',
  REGISTER_USER: 'users',
  ARTICLES: 'articles',
};

const axiosConfig = {
  baseURL: 'https://conduit.productionready.io/api/',
};

const axiosInstance = axios.create(axiosConfig);

const tokenConfig = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const { token } = user;
      return { headers: { Authorization: `Token ${token}` } };
    }
  } catch (err) {
    /* console.log('memo config can not read localStorage'); */
  }
  return {};
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

export const getArticlesList = async (offset = 0) => {
  return axiosInstance.get(`${API_URLS.ARTICLES}`, {
    params: { limit: 10, offset },
    ...tokenConfig(),
  });
};

export const LikeArticle = async slug => {
  return axiosInstance.post(`${API_URLS.ARTICLES}/${slug}/favorite`, {}, tokenConfig());
};

export const UnLikeArticle = async slug => {
  return axiosInstance.delete(`${API_URLS.ARTICLES}/${slug}/favorite`, tokenConfig());
};

export const getArticle = async slug => {
  return axiosInstance.get(`${API_URLS.ARTICLES}/${slug}`, { ...tokenConfig() });
};

export const createArticle = async data => {
  return axiosInstance.post(`${API_URLS.ARTICLES}`, data, tokenConfig());
};

export const updateArticle = async (slug, data) => {
  return axiosInstance.put(`${API_URLS.ARTICLES}/${slug}`, data, tokenConfig());
};
