import "./popup.css";

function Popup({ onClose }) {
  return (
    <div className="popup">

      <div className="popup-check">
        <i className="bi bi-check-lg"></i>
      </div>

      <div className="popup-content">
        <strong>PDF salvo com sucesso</strong>

        <p>
          Seu arquivo está pronto.
          <button className="visualizar">
            Visualizar
          </button>
        </p>
      </div>

      <button className="popup-close" onClick={onClose}>
        <i className="bi bi-x-circle"></i>
      </button>

    </div>
  );
}

export default Popup;