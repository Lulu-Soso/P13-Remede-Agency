import React, { useState } from "react";
import TransactionItem from "../components/TransactionItem";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);

  const [isEditVisible, setIsEditVisible] = useState(false);

  const handleEditBtn = () => {
    setIsEditVisible(!isEditVisible);
  };

  const handleCancelEditBtn = () => {
    // Reset the edit section visibility
    setIsEditVisible(false);
  };

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          {isEditVisible ? (
            // If edit section is visible, hide the welcome-name and edit-button
            <h1 id="welcome-back">
              Welcome back
              <br />
            </h1>
          ) : (
            // If edit section is not visible, show the welcome-name and edit-button
            <h1 id="welcome-back">
              Welcome back
              <br />
              <span id="welcome-name">
                {user.userData && user.userData.firstName}{" "}
                {user.userData && user.userData.lastName}
              </span>
            </h1>
          )}
          {/* Show the Edit Name button only when edit section is not visible */}
          {!isEditVisible && (
            <button
              className="edit-button"
              type="button"
              onClick={handleEditBtn}
            >
              Edit Name
            </button>
          )}
          <div
            id="edit-section"
            style={{ display: isEditVisible ? "block" : "none" }}
          >
            <form className="edit-form">
              <div className="edit-input">
                <input
                  type="text"
                  placeholder={user.userData.firstName}
                  required=""
                />
              </div>
              <div className="edit-input">
                <input
                  type="text"
                  placeholder={user.userData.lastName}
                  required=""
                />
              </div>
            </form>
            <div className="edit-btn-form">
              <button type="button" className="save-button">
                Save
              </button>
              <button type="button" className="cancel-button" onClick={handleCancelEditBtn}>
                Cancel
              </button>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default ProfilePage;
