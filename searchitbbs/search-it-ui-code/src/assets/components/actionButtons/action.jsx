function ActionButtons() {
  return (
    <div className="actions">

      <button className="clear-button">
        <i className="bi bi-trash"></i>Limpar Campos
      </button>

      <div>
        <button className="generate-button">
          <i className="bi bi-lock"></i> Gerar Recibo
        </button>

        <button className="secondary-button">
          <i className="bi bi-printer"></i> Imprimir Recibo
        </button>

        <button className="secondary-button">
          ◉ Salvar PDF
        </button>
      </div>

    </div>
  );
}

export default ActionButtons;