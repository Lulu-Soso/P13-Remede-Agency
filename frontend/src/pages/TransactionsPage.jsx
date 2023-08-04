import React from "react";
import transactionsData from "../mockData/transactionsData";
import TransactionItem from "../components/TransactionItem";

const TransactionsPage = () => {
  return (
    <main className="main bg-dark">
        <div className="transactions-header">
            <p>Aregnt Bank Checking (x8349)</p>
            <p className="price">$2,082.79</p>
            <p className="balance">Available Balance</p>
        </div>
      <div className="transactions-container">
          <div className="transactions-title">
              <p>Date</p>
              <p>Description</p>
              <p>Amount</p>
              <p>Balance</p>
            </div>
          {transactionsData.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
      </div>
    </main>
  );
};

export default TransactionsPage;
