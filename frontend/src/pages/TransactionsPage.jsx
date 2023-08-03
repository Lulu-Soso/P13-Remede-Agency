import React from "react";
import transactionsData from "../mockData/transactionsData";
import TransactionItem from "../components/TransactionItem";

const TransactionsPage = () => {
  return (
    <main className="main bg-dark">
      <div className="transactions-container">
        {/* <div className="transactions-list"> */}
          <div className="transaction-header">
            <div className="transaction-thead">
              <div>Date</div>
              <div>Description</div>
              <div>Amount</div>
              <div>Balance</div>
            </div>
          </div>
          {transactionsData.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        {/* </div> */}
      </div>
    </main>
  );
};

export default TransactionsPage;
