export default function ActionButtons({ onGerarRecibo, onPdfSaved }) {
  return (
    <div className="actions">

      <button className="clear-button" type="button">
        <i className="bi bi-trash"></i>Limpar Campos
      </button>

      <div>
        <button className="generate-button" type="button" onClick={onGerarRecibo}>
          <i className="bi bi-lock"></i> Gerar Recibo
        </button>

        <button className="secondary-button" type="button">
          <i className="bi bi-printer"></i> Imprimir Recibo
        </button>

        <button className="secondary-button" type="button">
          ◉ Salvar PDF
        </button>
      </div>

    </div>
  )
}
