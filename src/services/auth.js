import axios from 'axios';
import authHeader from './authHeader';

axios.defaults.baseURL = 'http://localhost:3001/api/v1';

const login = async ({ email, password }) => {
  try {
    const response = await axios.post('/user/login', {
      email,
      password,
    });
    if (response.data && response.data.body.token) {
      return response.data.body.token;
    }
    return null;
  } catch (error) {
    console.log('login error ===', error);
    return error;
  }
};

const me = async (token, rememberMe) => {
  try {
    const response = await axios.post(
      '/user/profile',
      {},
      {
        headers: authHeader(token),
      }
    );
    if (token) {
      localStorage.setItem(
        'userArgentBank',
        JSON.stringify({
          token,
          firstName: response.data.body.firstName,
          lastName: response.data.body.lastName,
          id: response.data.body.id,
          rememberMe,
        })
      );
    }
    return response.data.body;
  } catch (error) {
    return error;
  }
};

const updateUser = async ({ firstName, lastName }) => {
  try {
    const response = await axios.put(
      '/user/profile',
      { firstName, lastName },
      {
        headers: authHeader(),
      }
    );
    const token = JSON.parse(localStorage.getItem('userArgentBank')).token;
    const rememberMe = JSON.parse(
      localStorage.getItem('userArgentBank').rememberMe
    );
    localStorage.setItem(
      'userArgentBank',
      JSON.stringify({
        token,
        firstName: response.data.body.firstName,
        lastName: response.data.body.lastName,
        id: response.data.body.id,
        rememberMe,
      })
    );
    return response;
  } catch (error) {
    return error;
  }
};

const logout = () => {
  localStorage.clear();
};

const Auth = {
  login,
  me,
  updateUser,
  logout,
};
export default Auth;
