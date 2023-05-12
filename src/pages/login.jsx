import { useState } from 'react';
import '../styles/pages/login.css';
import { useDispatch, useStore } from 'react-redux';
import Auth from '../services/auth';

export function Login() {
  const dispatch = useDispatch();
  const store = useStore();

  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // authentification
    try {
      const response = await Auth.login(form);
      console.log(response);
    } catch (error) {
      console.log('form login error', error);
    }
    // const isUserLoggedIn = store.getState().loggedIn;
    // if (isUserLoggedIn) return;
    // dispatch({
    //   type: 'loginUser',
    //   payload: {
    //     user: null,
    //     token: null,
    //   },
    // });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
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
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}
