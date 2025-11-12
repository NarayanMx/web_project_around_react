import React from "react";
import { useState } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "./form/NewCard/NewCard.jsx"
import EditProfile from "./form/EditProfile/EditProfile.jsx"
import EditAvatar from "./form/EditAvatar/EditAvatar.jsx"

function Main() {

  return (
    <section className="elements">

      {popup && (
      <Popup onClose={handleClosePopup} title={popup.title}>
      {popup.children}
      </Popup>
      )}
    
    </section>
  );
}

export default Main;
