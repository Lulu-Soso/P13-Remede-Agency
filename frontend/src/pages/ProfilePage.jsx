import React from "react";
import ProfileEdit from "../components/ProfileEdit";
import accountsData from "../mockData/accountsData";
import Account from "../components/Account";

const ProfilePage = () => {
  return (
    <main className="main bg-dark">
      <ProfileEdit />

      <h2 className="sr-only">Accounts</h2>

      {accountsData.map((account) => (
        <Account
          key={account.id}
          title={account.title}
          accountAmount={account.amount}
          balance={account.amount_description}
        />
      ))}
    </main>
  );
};

export default ProfilePage;
