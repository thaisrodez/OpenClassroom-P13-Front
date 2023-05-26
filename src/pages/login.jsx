import { useState } from 'react';
import '../styles/pages/login.css';
import { useDispatch } from 'react-redux';
import Auth from '../services/auth';
import { setUser } from '../features/user';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // authentification
    try {
      const token = await Auth.login(form);
      const user = await Auth.me(token, rememberMe);
      dispatch(setUser(user));
      navigate('/');
    } catch (error) {
      console.log('form login error', error);
      return error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const _form = { ...form };
    _form[name] = value;
    setForm(_form);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              name="rememberMe"
              value={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}
