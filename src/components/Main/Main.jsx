import React from "react";
import { useState, useEffect, useContext } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "./form/NewCard/NewCard.jsx"
import EditProfile from "./form/EditProfile/EditProfile.jsx"
import EditAvatar from "./form/EditAvatar/EditAvatar.jsx"
import Profile from "../Profile/Profile";
import Card from "../Card/Card.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import api from "../../utils/api.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Main({onOpenPopup, onClosePopup, popup}) {

    //const [popup, setPopup] = useState(null);
 
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar Perfíl", children: <EditProfile /> };
    const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

    /*const handleClosePopup = () => {
    setPopup(null);
    };

    const handleOpenPopup = (popup) => {
    setPopup(popup);
    };*/

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

    const { currentUser } = useContext(CurrentUserContext);

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


  return (
    <>
      <Profile onOpenPopup={onOpenPopup}
      newCardPopup={newCardPopup}
      editProfilePopup={editProfilePopup}
      editAvatarPopup={editAvatarPopup}
       />    

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
          <Card 
          key={card._id} 
          card={card} 
          handleOpenPopup={onOpenPopup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}/>
          ))}
        </ul>
      </section>

      {popup && (
      <Popup onClose={onClosePopup} title={popup.title}>
      {popup.children}
      </Popup>
      )}    
 
    </>
  );
}

export default Main;
