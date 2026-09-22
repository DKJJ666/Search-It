import db from "../config/db.js";

const criarRecibo = async (req, res) => {
  try {
    const {
      nome_cliente,
      documento_cliente,
      valor,
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      ponto_referencia,
    } = req.body;

    const anoAtual = new Date().getFullYear();
    const numeroAleatorio = Math.floor(1000 + Math.random() * 9000);
    const numero_recibo = `REC-${anoAtual}-${numeroAleatorio}`;
    const data_emissao = new Date();

    const query = `
            INSERT INTO recibos (
                numero_recibo, data_emissao, nome_cliente, documento_cliente, valor,
                cep, logradouro, numero, complemento, bairro, cidade, estado, ponto_referencia
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

    const valores = [
      numero_recibo,
      data_emissao,
      nome_cliente,
      documento_cliente,
      valor,
      cep,
      logradouro,
      numero,
      complemento || "",
      bairro,
      cidade,
      estado,
      ponto_referencia || "",
    ];

    const [resultado] = await db.execute(query, valores);

    res.status(201).json({
      mensagem: "Recibo gerado com sucesso!",
      id: resultado.insertId,
      numero_recibo: numero_recibo,
    });
  } catch (erro) {
    console.error("Erro ao guardar recibo:", erro);
    res.status(500).json({ erro: "Ocorreu um erro ao guardar o recibo." });
  }
};

const listarRecibos = async (req, res) => {
  try {
    const [linhas] = await db.execute(
      "SELECT * FROM recibos ORDER BY data_emissao DESC",
    );
    res.status(200).json(linhas);
  } catch (erro) {
    console.error("Erro ao listar recibos:", erro);
    res.status(500).json({ erro: "Ocorreu um erro ao buscar os recibos." });
  }
};


export default {
  criarRecibo,
  listarRecibos
};
