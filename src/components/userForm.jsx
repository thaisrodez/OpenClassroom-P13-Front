import PropTypes from 'prop-types';

export function UserForm({ setIsFormDisplayed }) {
  return (
    <div className="header">
      <h1>Welcome back</h1>

      <div className="edit-form">
        <label htmlFor="firstname" className="sr-only">
          Firstname
        </label>
        <input type="text" id="firstname" placeholder="Tony" />
        <label htmlFor="lastname" className="sr-only">
          Lastname
        </label>
        <input type="text" id="lastname" placeholder="Jarvis" />
      </div>
      <div className="edit-form">
        <button onClick={() => setIsFormDisplayed(false)}>Save</button>
        <button onClick={() => setIsFormDisplayed(false)}>Cancel</button>
      </div>
    </div>
  );
}

UserForm.propTypes = {
  setIsFormDisplayed: PropTypes.func,
};
