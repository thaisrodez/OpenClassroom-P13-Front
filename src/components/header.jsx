import { useDispatch, useSelector } from 'react-redux';
import logo from '../img/argentBankLogo.png';
import '../styles/components/header.css';
import { Link } from 'react-router-dom';
import { removeUser } from '../features/user';
import Auth from '../services/auth';

export function Header() {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);

  const handleLogout = () => {
    Auth.logout();
    dispatch(removeUser());
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {firstName ? (
          <>
            <Link to="profile" className="main-nav-item" href="./user.html">
              <i className="fa fa-user-circle"></i> {firstName}
            </Link>
            <Link to="/" className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        ) : (
          <Link to="login" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
