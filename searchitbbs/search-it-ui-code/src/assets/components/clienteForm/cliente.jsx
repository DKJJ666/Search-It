function ClienteForm() {
  return (
    <section className="form-section">

      <div className="form-row">
        <div className="field large">
          <label>Nome do Cliente </label>
          <input
            type="text"
            placeholder="Mariana Souza Santos"
          />
        </div>

        <div className="field">
          <label>CPF / CNPJ </label>
          <input
            type="text"
            placeholder="123.456.789-00"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Valor do Pedido </label>
          <input
            type="text"
            placeholder="R$ 350,00"
          />
        </div>

        <div className="field cep-field">
          <label>CEP </label>

          <div className="cep-container">
            <input
              type="text"
              placeholder="01311-200"
            />

            <button><i className="bi bi-search"></i></button>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ClienteForm;