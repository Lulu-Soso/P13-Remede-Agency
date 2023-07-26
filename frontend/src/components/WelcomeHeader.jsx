import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editSuccess, editUser } from "../redux/actions/user.action";

const WelcomeHeader = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  // Utiliser useEffect pour mettre à jour les champs d'édition lorsque userData change
  useEffect(() => {
    // Mettre à jour les champs d'édition lorsque userData change
    if (user.userData) {
      setFirstNameInput(user.userData.firstName);
      setLastNameInput(user.userData.lastName);
    }
  }, [user.userData]);

  const handleEditBtn = () => {
    setIsEditVisible(!isEditVisible);
  };

  const handleCancelEditBtn = () => {
    setIsEditVisible(false);
  };

  const handleSaveBtn = async () => {
    // Appeler l'action pour éditer l'utilisateur avec les nouvelles valeurs de firstNameInput et lastNameInput
    await dispatch(editUser(firstNameInput, lastNameInput));

    // Mettre à jour les champs d'édition avec les nouvelles données de l'utilisateur après la sauvegarde réussie
    setIsEditVisible(false);

    // Mettre à jour le state avec les nouvelles données de l'utilisateur après la sauvegarde réussie
    const updatedUserData = { ...user.userData, firstName: firstNameInput, lastName: lastNameInput };
    dispatch(editSuccess(updatedUserData));

    // Mettre à jour le localStorage avec les nouvelles données de l'utilisateur
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  // Vérifier si l'utilisateur est connecté en vérifiant si user.userData existe
  const isUserLoggedIn = !!user.userData;

  return (
    <div className="header">
      {isUserLoggedIn && (
        <>
          <h1 id="welcome-back">
            Welcome back
            <br />
            {isEditVisible ? (
              <span className="edit-input">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstNameInput}
                  onChange={(e) => setFirstNameInput(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastNameInput}
                  onChange={(e) => setLastNameInput(e.target.value)}
                  required
                />
              </span>
            ) : (
              <span id="welcome-name">
                {user.userData.firstName} {user.userData.lastName}
              </span>
            )}
          </h1>
          {!isEditVisible && (
            <button className="edit-button" type="button" onClick={handleEditBtn}>
              Edit Name
            </button>
          )}
          {isEditVisible && (
            <div id="edit-section">
              <div className="edit-btn-form">
                <button type="button" className="save-button" onClick={handleSaveBtn}>
                  Save
                </button>
                <button type="button" className="cancel-button" onClick={handleCancelEditBtn}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WelcomeHeader;
