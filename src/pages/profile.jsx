import { UserHeader } from '../components/userHeader';
import { UserForm } from '../components/userForm';
import '../styles/pages/profile.css';
import { useState } from 'react';

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

  return (
    <main className="main bg-dark">
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
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </main>
  );
}
