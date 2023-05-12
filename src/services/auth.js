import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1';

const login = async ({ email, password }) => {
  try {
    const response = await axios.post('/user/login', {
      email,
      password,
    });
    if (response.data && response.data.token) {
      localStorage.setItem(
        'userArgentBank',
        JSON.stringify(response.data.token)
      );
    }
    return response;
  } catch (error) {
    console.log('login error ===', error);
    return error;
  }
};

const logout = () => {
  localStorage.removeItem('userArgentBank');
};

const Auth = {
  login,
  logout,
};
export default Auth;
