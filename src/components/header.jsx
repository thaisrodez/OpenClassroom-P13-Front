import { useSelector } from 'react-redux';
import logo from '../img/argentBankLogo.png';
import '../styles/components/header.css';
import { Link } from 'react-router-dom';

export function Header() {
  const user = useSelector((state) => state.user.data);
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
        {user && (
          <>
            <Link to="profile" className="main-nav-item" href="./user.html">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link to="/" className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        )}
        <Link to="login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}
