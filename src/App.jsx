import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api.jsx";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {

  const [currentUser, setCurrentUser] = useState({});

  useEffect (() => {
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch((error) => {
      console.error("Error al obtener información del usuario:", error);
    });
  }, []);

  const handleUpdateUser = (data) => {
    api.updateUserInfo(data)
    .then((newData) => {
      setCurrentUser(newData);
    })
    .catch((error) => {
      console.error("Error al actualizar usuario:", error);
    });
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
        <Header />
        <Main />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
