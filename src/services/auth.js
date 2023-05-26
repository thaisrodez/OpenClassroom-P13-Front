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
      localStorage.setItem(
        'userArgentBank',
        JSON.stringify(response.data.body.token)
      );
    }
    return response;
  } catch (error) {
    console.log('login error ===', error);
    return error;
  }
};

const me = async () => {
  try {
    const response = await axios.post(
      '/user/profile',
      {},
      {
        headers: authHeader(),
      }
    );
    return response;
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
    return response;
  } catch (error) {
    return error;
  }
};

const logout = () => {
  localStorage.removeItem('userArgentBank');
};

const Auth = {
  login,
  me,
  updateUser,
  logout,
};
export default Auth;
