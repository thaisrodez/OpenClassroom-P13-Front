import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../services/auth';
import { setUser } from '../features/user';

export function UserForm({ setIsFormDisplayed }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formInputs, setFormInputs] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormDisplayed(false);
    try {
      const response = await Auth.updateUser(formInputs);
      dispatch(setUser(response.data.body));
    } catch (error) {
      console.log('error updating user infos', error);
      return error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const _formInputs = { ...formInputs };
    _formInputs[name] = value;
    setFormInputs(_formInputs);
  };

  return (
    <div className="header">
      <h1>Welcome back</h1>
      <form onSubmit={handleSubmit}>
        <div className="edit-form">
          <label htmlFor="firstname" className="sr-only">
            Firstname
          </label>
          <input
            type="text"
            name="firstName"
            id="firstname"
            value={formInputs.firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastname" className="sr-only">
            Lastname
          </label>
          <input
            type="text"
            name="lastName"
            id="lastname"
            value={formInputs.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="edit-form">
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsFormDisplayed(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

UserForm.propTypes = {
  setIsFormDisplayed: PropTypes.func,
};
