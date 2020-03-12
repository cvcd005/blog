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

const memoConfig = () => {
  /* eslint-disable */
  if (!axiosConfig.hasOwnProperty('headers')) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const { token } = user;
        axiosConfig.headers = { Authorization: `Token ${token}` };
      }
    } catch (err) {
      /* console.log('memo config can not read localStorage'); */
    }
  }
  return axiosConfig;
  /* eslint-enable */
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
    ...memoConfig(),
  });
};

export const LikeArticle = async slug => {
  return axiosInstance.post(`${API_URLS.ARTICLES}/${slug}/favorite`, {}, memoConfig());
};

export const UnLikeArticle = async slug => {
  return axiosInstance.delete(`${API_URLS.ARTICLES}/${slug}/favorite`, memoConfig());
};

export const createArticle = async data => {
  /* let data = {
        "article": {
            "title": "123456",
            "description": "Ever wonder how?",
            "body": "You have to believe",
            "tagList": ["reactjs", "angularjs", "dragons"]
          }
      } */
  return axiosInstance.post(`${API_URLS.ARTICLES}`, data, memoConfig());
};
