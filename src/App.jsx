import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
  <img
    src="./images/Logo_white.png"
    alt="Logo del proyecto Around US"
    className="header__logo"
  />
</header>

<section className="profile">
  <div className="profile__image-wrapper">
    <img
      src="./images/Profile_pic.png"
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

<section className="elements">

</section>

<footer className="footer">© 2025 Around The U.S.</footer>

    </>
  )
}

export default App
