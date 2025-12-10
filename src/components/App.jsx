import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

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
    api.setUserAvatar(data)
    .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
    };

    const [cards, setCards] = useState([])

        useEffect(() => {
      api.getInitialCards ()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.error("Error al obtener las tarjetas:", error);
      });
    }, []);

        const handleCardLike = (card) => {
      const isLiked = card.isLiked;

      const apiMethod = isLiked ? api.unlikeCard(card._id) : api.likeCard(card._id);

      apiMethod
      .then ((updatedCard) => {
        setCards((state) =>
        state.map((currentCard) =>
        currentCard._id === card._id ? updatedCard : currentCard
      )
    );
   })
   .catch ((error) => {
    console.error("Error al cambiar el like:", error);
   });
    };

    async function handleCardDelete(card) {
      await api.deleteCard(card._id).then (() => {
        setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
      }).catch((error) => console.error(error));
    }

    const handleAddPlaceSubmit = (cardData) => {
      api.addCard(cardData)
      .then((newCard) => {
        setCards ([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => {
        console.error("Error al agregar tarjeta:", error);
      });
    };





  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
        <Header />
        <Main 
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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
