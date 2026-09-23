export default function ActionButtons({ onGerarRecibo, onImprimirRecibo, onSalvarPdf, salvandoRecibo }) {
  return (
    <div className="actions">

      <button className="clear-button" type="button">
        <i className="bi bi-trash"></i>Limpar Campos
      </button>

      <div>
        <button className="generate-button" type="button" onClick={onGerarRecibo} disabled={salvandoRecibo}>
          <i className="bi bi-lock"></i> {salvandoRecibo ? "Salvando..." : "Gerar Recibo"}
        </button>

        {/* <button className="secondary-button" type="button" onClick={onImprimirRecibo}>
          <i className="bi bi-printer"></i> Imprimir Recibo
        </button> */}

        {/* <button className="secondary-button" type="button" onClick={onSalvarPdf}>
          ◉ Salvar PDF
        </button> */}
      </div>

    </div>
  )
}
