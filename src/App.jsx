import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api.jsx";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  useEffect (() => {
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch((error) => {
      console.error("Error al obtener información del usuario:", error);
    });
  }, []);

const handleOpenPopup = (popup) => {
  setPopup(popup);
};

const handleClosePopup = () => {
  setPopup(null);
};

  const handleUpdateUser = (data) => {
    api.updateUserInfo(data)
    .then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    })
    .catch((error) => {
      console.error("Error al actualizar usuario:", error);
    });
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.setUserAvatar(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
    })();
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
        <Header />
        <Main 
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
