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
    let storage = {
      rememberMe,
      firstName: response.data.body.firstName,
      lastName: response.data.body.lastName,
      id: response.data.body.id,
      token,
    };
    if (rememberMe) {
      localStorage.setItem('userArgentBank', JSON.stringify(storage));
    } else {
      sessionStorage.setItem('userArgentBank', JSON.stringify(storage));
    }
    return response.data.body;
  } catch (error) {
    return error;
  }
};

const updateUser = async (token, { firstName, lastName }) => {
  try {
    const response = await axios.put(
      '/user/profile',
      { firstName, lastName },
      {
        headers: authHeader(token),
      }
    );
    const storage =
      localStorage.getItem('userArgentBank') ||
      sessionStorage.getItem('userArgentBank');

    const storedData = JSON.parse(storage);

    storedData.firstName = response.data.body.firstName;
    storedData.lastName = response.data.body.lastName;

    if (storedData.rememberMe) {
      localStorage.setItem('userArgentBank', JSON.stringify(storedData));
    } else {
      sessionStorage.setItem('userArgentBank', JSON.stringify(storedData));
    }
    return response;
  } catch (error) {
    return error;
  }
};

const logout = () => {
  localStorage.removeItem('userArgentBank');
  sessionStorage.removeItem('userArgentBank');
};

const Auth = {
  login,
  me,
  updateUser,
  logout,
};
export default Auth;
