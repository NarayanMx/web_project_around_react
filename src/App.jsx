import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import NewCard from "./components/Main/form/NewCard/NewCard.jsx"
import EditProfile from "./components/Main/form/EditProfile/EditProfile.jsx"
import EditAvatar from "./components/Main/form/EditAvatar/EditAvatar.jsx"

function App() {

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
    <div className="page">
      <Header />
      <Profile />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
