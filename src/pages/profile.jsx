import { UserHeader } from '../components/userHeader';
import { UserForm } from '../components/userForm';
import '../styles/pages/profile.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const userData = [
  {
    id: 11,
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    id: 22,
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    id: 33,
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
];

export function Profile() {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const userId = useSelector((state) => state.user.id);

  return (
    <main className="main bg-dark">
      {userId ? (
        <>
          {isFormDisplayed ? (
            <UserForm setIsFormDisplayed={setIsFormDisplayed} />
          ) : (
            <UserHeader setIsFormDisplayed={setIsFormDisplayed} />
          )}

          <h2 className="sr-only">Accounts</h2>
          {userData.map((account) => (
            <section key={account.id} className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">{account.title}</h3>
                <p className="account-amount">{account.amount}</p>
                <p className="account-amount-description">
                  {account.description}
                </p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">
                  View transactions
                </button>
              </div>
            </section>
          ))}
        </>
      ) : (
        <div className="no-profile">
          <p>You are not logged in</p>
          <Link to="/Login">Sign In</Link>
        </div>
      )}
    </main>
  );
}
