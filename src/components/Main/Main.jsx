import React from "react";
import { useState } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "./form/NewCard/NewCard.jsx"
import EditProfile from "./form/EditProfile/EditProfile.jsx"
import EditAvatar from "./form/EditAvatar/EditAvatar.jsx"
import Profile from "../Profile/Profile";

function Main() {

      const [popup, setPopup] = useState(null);

    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar Perfíl", children: <EditProfile /> };
    const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

    const handleClosePopup = () => {
    setPopup(null);
    };

    const handleOpenPopup = (popup) => {
    setPopup(popup);
    };

  return (
<>
      <Profile onOpenPopup={handleOpenPopup} />


    <section className="elements">

      {popup && (
      <Popup onClose={handleClosePopup} title={popup.title}>
      {popup.children}
      </Popup>
      )}
    
    </section>
    </>
  );
}

export default Main;
