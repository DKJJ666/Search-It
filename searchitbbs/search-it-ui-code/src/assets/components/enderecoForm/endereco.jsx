function EnderecoForm() {
  return (
    <section className="form-section">

      <div className="form-row">
        <div className="field large">
          <label>Rua / Logradouro *</label>
          <input
            type="text"
            placeholder="Avenida Paulista"
            readOnly
          />
        </div>

        <div className="field small">
          <label>Número *</label>
          <input
            type="text"
            placeholder="1106"
            readOnly
          />
        </div>
      </div>

      <div className="form-row">

        <div className="field">
          <label>Complemento</label>
          <input
            type="text"
            placeholder="Bloco B - Apto 42"
          />
        </div>

        <div className="field">
          <label>Bairro *</label>
          <input
            type="text"
            placeholder="Bela Vista"
            readOnly
          />
        </div>

      </div>

      <div className="form-row">

        <div className="field">
          <label>Cidade *</label>
          <input
            type="text"
            placeholder="São Paulo"
            readOnly
          />
        </div>

        <div className="field small">
          <label>Estado (UF) *</label>
          <input
            type="text"
            placeholder="SP"
            readOnly
          />
        </div>

      </div>

      <div className="field">
        <label>Ponto de Referência (Opcional)</label>
        <input
          type="text"
          placeholder="Próximo ao MASP"
        />
      </div>

    </section>
  );
}

export default EnderecoForm;