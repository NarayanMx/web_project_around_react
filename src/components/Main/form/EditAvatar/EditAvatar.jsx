export default function EditAvatar() {

    const handleSubmit = (e) => {
    e.preventDefault();
    };

return (

  <form className="popupImg__form popup__form" onSubmit={handleSubmit}>

    <label className="popupImg__field">
      <input
        type="url"
        name="url"
        placeholder="Enlace a la imagen"
        className="popupImg__url popup__input"
        id="url-input"
        required
      />
      <span className="popup__input-error" id="url-input-error"></span>
    </label>

  <button type="submit" className="popupImg__save-button popup__button">Guardar</button>
  </form>
);
}