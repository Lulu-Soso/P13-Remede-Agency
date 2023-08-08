import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editFailure, editUser } from "../redux/actions/user.action";

const ProfileEdit = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const handleToggleEdit = () => {
    setIsEditVisible(!isEditVisible);
  };

  const handleSaveBtn = async () => {
    // Vérifier si les champs sont vides
    if (!firstNameInput.trim() || !lastNameInput.trim()) {
      dispatch(editFailure("Please fill in both Firstname and Lastname."));
      return;
    }

    try {
      // Appeler l'action pour éditer l'utilisateur avec les nouvelles valeurs de firstNameInput et lastNameInput
      await dispatch(editUser(firstNameInput, lastNameInput));

      setIsEditVisible(false);
    } catch (error) {
      console.error("Edit User Error:", error);
      dispatch(editFailure("Failed to edit user details."));
    }
  };

  // useEffect pour mettre à jour les champs d'édition lorsque userData change
  useEffect(() => {
    // Mettre à jour les champs d'édition lorsque userData change
    if (user.userData.firstName && user.userData.lastName) {
      setFirstNameInput(user.userData.firstName);
      setLastNameInput(user.userData.lastName);
    }
  }, [user.userData.firstName, user.userData.lastName]);

  return (
    <div className="header">
      <h1 className="welcome-back">Welcome back</h1>

      {!isEditVisible ? (
        <div className="welcome-name">
          <p className="name">
            {user.userData.firstName} {user.userData.lastName}!
          </p>
          <br />
          <button
            className="edit-button"
            type="button"
            onClick={handleToggleEdit}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <>
          {user.errorState && <p style={{ color: "red" }}>{user.errorState}</p>}
          <div className="edit-input">
            <input
              type="text"
              placeholder="Firstname"
              value={firstNameInput}
              onChange={(e) => setFirstNameInput(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Lastname"
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
              onClick={handleToggleEdit}
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
