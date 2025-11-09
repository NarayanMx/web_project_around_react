export default function NewCard() {

    const handleSubmit = (e) => {
    e.preventDefault();
    };

return (

  <form className="popup__form" onSubmit={handleSubmit}>
    <label className="popup__field">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        className="popup__name popup__input"
        minlength="2"
        maxlength="40"
        id="name-input"
        required
      />
      <span className="popup__input-error" id="name-input-error"></span>
    </label>

    <label className="popup__field">
      <input
        type="text"
        name="acerca"
        placeholder="Acerca de mí"
        className="popup__acerca popup__input"
        minlength="2"
        maxlength="200"
        id="about-input"
        required
      />
      <span className="popup__input-error" id="about-input-error"></span>
    </label>

  <button type="submit" className="popup__save-button popup__button">Guardar</button>
  </form>
);
}