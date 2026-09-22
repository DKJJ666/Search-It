function Recibo() {
  return (
    <aside className="receipt-preview">

      <div className="preview-header">
        <h2>Visualização do Recibo</h2>

        <p>
          Modelo pronto para impressão térmica ou salvamento em PDF.
        </p>
      </div>

      <div className="receipt">

        <h3>RECIBO DE ENTREGA</h3>

        <p className="receipt-number">
          Nº REC-2026-8941
        </p>

        <p>
          22 de Outubro de 2026 às 14:32
        </p>

        <div className="receipt-value">
          <span>VALOR TOTAL DO RECIBO</span>
          <strong>R$ 350,00</strong>
        </div>

        <div className="receipt-info">

          <span>DESTINATÁRIO / CLIENTE</span>
          <strong>Mariana Souza Santos</strong>

          <span>CPF: 123.456.789-00</span>

          <span>ENDEREÇO SOLICITADO</span>
          <strong>Avenida Paulista, 1106</strong>

          <span>Bloco B - Apto 42</span>

          <span>Bela Vista — São Paulo / SP</span>

          <span>CEP CONSULTADO</span>
          <strong>01311-200</strong>

          <span>PONTO DE REFERÊNCIA</span>
          <span>Próximo ao MASP</span>

        </div>

        <div className="receipt-code">
          ||| || |||| ||| |||| |
        </div>

      </div>

    </aside>
  );
}

export default Recibo;