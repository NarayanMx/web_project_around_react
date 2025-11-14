export default function Popup(props) {

  const {title, children, onClose} = props;

  const handleOverlayClick =(e) => {
    if (e.target === e.currentTarget) {
    onClose();
    }
  };

  return (

  <div className="popup" onClick={handleOverlayClick}> 
    <div className="popup__container">

      <button className="popup__close-button" onClick={onClose}>
        <img
          src="./images/Close_Icon.png"
          alt="botón para cerrar popup"
          className="popup__close-image"
        />
      </button>

      {title && <p className="popup__title">{title}</p>}

      <div className="popup__limit">
        {children}
      </div>
      
    </div>
  </div>
  )
}