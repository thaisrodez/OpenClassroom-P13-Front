import '../styles/pages/login.css';
import { useDispatch } from 'react-redux';

export function Login() {
  const dispatch = useDispatch();
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => {
                dispatch({
                  type: 'fillLoginUsername',
                  payload: { username: e.target.value },
                });
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                dispatch({
                  type: 'fillLoginPassword',
                  payload: { password: e.target.value },
                });
              }}
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
