import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export function UserHeader({ setIsFormDisplayed }) {
  const user = useSelector((state) => state.user);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user ? `${user.firstName} ${user.lastName}` : ''} !
      </h1>
      <button className="edit-button" onClick={() => setIsFormDisplayed(true)}>
        Edit Name
      </button>
    </div>
  );
}

UserHeader.propTypes = {
  setIsFormDisplayed: PropTypes.func,
};
