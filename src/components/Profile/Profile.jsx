import React from "react";
import avatarImg from "../../../images/Profile_pic.png";

function Profile({ onOpenPopup }) {
  return (

<section className="profile">
  <div className="profile__image-wrapper">
    <img
      src={avatarImg}
      alt="Imagen de perfil"
      className="profile__image"
    />
    <img
      src="./images/editProfileButton.png"
      alt="Botón de editar perfil"
      className="profile__editButton"
    />
  </div>

  <div className="profile__info">
    <h1 className="profile__name">Jacques Cousteau</h1>
    <p className="profile__role">Explorador</p>
    <button className="profile__edit-button">
      <img
        src="./images/Edit_Button.png"
        alt="botón para editar"
        className="profile__edit-image"
      />
    </button>
  </div>

  <button className="profile__add-button">
    <img src="./images/Add_Button.png" alt="botón para editar" />
  </button>
</section>

  );
}

export default Profile;
