import PropTypes from 'prop-types';

export function UserHeader({ setIsFormDisplayed }) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
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
