import axios from 'axios';

const setAuthToken = token => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.patch['Content-Type'] = 'application/json';
  axios.defaults.headers.delete['Content-Type'] = 'application/json';
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.Authorization;
  }
};

export default setAuthToken;
