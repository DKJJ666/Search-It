import React from "react";

export default function ClienteForm({ dados, setDados }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="form-section">
      <div className="form-row">
        <div className="field large">
          <label>Nome do Cliente</label>
          <input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
            placeholder="Mariana Souza Santos"
          />
        </div>

        <div className="field">
          <label>CPF / CNPJ</label>
          <input
            type="text"
            name="documento"
            value={dados.documento}
            onChange={handleChange}
            placeholder="123.456.789-00"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Valor do Pedido</label>
          <input
            type="text"
            name="valor"
            value={dados.valor}
            onChange={handleChange}
            placeholder="R$ 350,00"
          />
        </div>

        <div className="field cep-field">
          <label>CEP</label>
          <div className="cep-container">
            <input
              type="text"
              name="cep"
              value={dados.cep}
              onChange={handleChange}
              placeholder="01311-200"
            />
            <button type="button"><i className="bi bi-search"></i></button>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="field large">
          <label>Rua</label>
          <input type="text" name="rua" value={dados.rua} onChange={handleChange} placeholder="Rua das Flores" />
        </div>
        <div className="field">
          <label>Número</label>
          <input type="text" name="numero" value={dados.numero} onChange={handleChange} placeholder="123" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Complemento</label>
          <input type="text" name="complemento" value={dados.complemento} onChange={handleChange} placeholder="Apto 42, Bloco B" />
        </div>
        <div className="field">
          <label>Bairro</label>
          <input type="text" name="bairro" value={dados.bairro} onChange={handleChange} placeholder="Centro" />
        </div>
        <div className="field">
          <label>Cidade / UF</label>
          <input type="text" name="cidade" value={dados.cidade} onChange={handleChange} placeholder="São Paulo / SP" />
        </div>
      </div>
    </section>
  );
}
