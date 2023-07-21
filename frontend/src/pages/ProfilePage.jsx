import React from 'react';
import TransactionItem from "../components/TransactionItem";

const ProfilePage = () => {
  return (
      <>
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br/>
              Tony Jarvis !
            </h1>
            <button className="edit-button">Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <TransactionItem title="Argent Bank Checking (x8349)" accountAmount="$2,082.79" balance="Available Balance"/>
          <TransactionItem title="Argent Bank Savings (x6712)" accountAmount="$10,928.42" balance="Available Balance"/>
          <TransactionItem title="Argent Bank Credit Card (x8349)" accountAmount="$184.30" balance="Current Balance"/>
        </main>
      </>
  );
};

export default ProfilePage;
