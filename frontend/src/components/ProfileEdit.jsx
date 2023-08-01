import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editFailure, editUser } from "../redux/actions/user.action";

const ProfileEdit = () => {
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
    // Vérifier si les champs sont vides
    if (!firstNameInput.trim() || !lastNameInput.trim()) {
      dispatch(editFailure("Please fill in both Firstname and Lastname."))
      return;
    }

    try {
      // Appeler l'action pour éditer l'utilisateur avec les nouvelles valeurs de firstNameInput et lastNameInput
      await dispatch(editUser(firstNameInput, lastNameInput));

      // Mettre à jour les champs d'édition avec les nouvelles données de l'utilisateur après la sauvegarde réussie
      setIsEditVisible(false);

    } catch (error) {
      console.error("Edit User Error:", error);
      dispatch(editFailure("Failed to edit user details."));
    }
  };

  return (
    <div className="header">
      <h1 className="welcome-back">Welcome back</h1>

      {!isEditVisible ? (
        <div className="welcome-name">
          <p className="name">
            {user.userData.firstName} {user.userData.lastName}!
          </p>
          <br />
          <button className="edit-button" type="button" onClick={handleEditBtn}>
            Edit Name
          </button>
        </div>
      ) : (
        <>
          {user.errorState && <p style={{ color: "red" }}>{user.errorState}</p>}
          <div className="edit-input">
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
          </div>

          <div className="edit-btn-form">
            <button
              type="button"
              className="save-button"
              onClick={handleSaveBtn}
            >
              Save
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancelEditBtn}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileEdit;
