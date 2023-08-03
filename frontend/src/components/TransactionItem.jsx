import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const TransactionItem = ({ transaction }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="transaction-item">
      <div className="transaction-header" onClick={toggleExpansion}>
        <div className="transaction-date">
          <span>{expanded ? "↑" : "↓"}</span>
          {transaction.date}
        </div>
        <div>{transaction.description}</div>
        <div>{transaction.amount}</div>
        <div>{transaction.balance}</div>
      </div>
      {expanded && (
        <div className="transaction-details">
          <p>Transaction Type: Electronic</p>
          <p>
            Category: Food
            <button>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </p>
          <p>
            notes:
            <button>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default TransactionItem;
