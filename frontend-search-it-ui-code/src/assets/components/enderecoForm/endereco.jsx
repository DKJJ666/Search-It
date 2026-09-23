export default function EnderecoForm({ dados, setDados }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setDados((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="form-section">

      <div className="form-row">
        <div className="field large">
          <label>Rua / Logradouro *</label>
          <input
            type="text"
            name="rua"
            value={dados.rua}
            onChange={handleChange}
            placeholder="Avenida Paulista"
            readOnly
          />
        </div>

        <div className="field small">
          <label>Número *</label>
          <input
            type="text"
            name="numero"
            value={dados.numero}
            onChange={handleChange}
            placeholder="1106"
          />
        </div>
      </div>

      <div className="form-row">

        <div className="field">
          <label>Complemento</label>
          <input
            type="text"
            name="complemento"
            value={dados.complemento}
            onChange={handleChange}
            placeholder="Bloco B - Apto 42"
          />
        </div>

        <div className="field">
          <label>Bairro *</label>
          <input
            type="text"
            name="bairro"
            value={dados.bairro}
            onChange={handleChange}
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
            name="cidade"
            value={dados.cidade}
            onChange={handleChange}
            placeholder="São Paulo"
            readOnly
          />
        </div>

        <div className="field small">
          <label>Unidade Federal (UF) *</label>
          <input
            type="text"
            name="estado"
            value={dados.uf}
            onChange={handleChange}
            placeholder="SP"
            readOnly
          />
        </div>

      </div>

      <div className="field">
        <label>Ponto de Referência (Opcional)</label>
        <input
          type="text"
        name="pontoReferencia"
        value={dados.pontoReferencia}
          onChange={handleChange}
          placeholder="Próximo ao MASP"
        />
      </div>

    </section>
  )
}
