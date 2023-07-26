import React from "react";
import TransactionItem from "../components/TransactionItem";
import WelcomeHeader from "../components/WelcomeHeader";

const ProfilePage = () => {

  return (
    <main className="main bg-dark">
      <WelcomeHeader />

      <h2 className="sr-only">Accounts</h2>
      <TransactionItem
        title="Argent Bank Checking (x8349)"
        accountAmount="$2,082.79"
        balance="Available Balance"
      />
      <TransactionItem
        title="Argent Bank Savings (x6712)"
        accountAmount="$10,928.42"
        balance="Available Balance"
      />
      <TransactionItem
        title="Argent Bank Credit Card (x8349)"
        accountAmount="$184.30"
        balance="Current Balance"
      />
    </main>
  );
};

export default ProfilePage;
