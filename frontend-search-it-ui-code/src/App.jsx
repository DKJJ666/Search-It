import { useRef, useState } from "react"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import Header from "../src/assets/components/header/header"
import ClienteForm from "../src/assets/components/clienteForm/cliente"
import EnderecoForm from "../src/assets/components/enderecoForm/endereco"
import ActionButtons from "../src/assets/components/actionButtons/action"
import "./App.css"
import Recibo from "../src/assets/components/recibo/recibo"
import PopUp from "../src/assets/components/popUp/popUp"
import { recibosAPI } from './services/api.js'

function App() {

  const [dadoInput, setDadoInput] = useState({
    nome: "",
    documento: "",
    valor: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    uf: "",           
    pontoReferencia: "",
  })

  
  const [dadosRecibo, setDadosRecibo] = useState({
    nome: "",
    documento: "",
    valor: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    uf: "",
    pontoReferencia: "",
  })

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mostrarRecibo, setMostrarRecibo] = useState(false);
  const [erroRecibo, setErroRecibo] = useState("");
  const [salvandoRecibo, setSalvandoRecibo] = useState(false);
  const reciboRef = useRef(null);

  const handleGerarRecibo = async () => {
    setErroRecibo("");
    setSalvandoRecibo(true);

    const valorNumerico = Number(
      String(dadoInput.valor || "")
        .replace(/R\$\s?/i, "")
        .replace(/\./g, "")
        .replace(",", ".")
    );

    const reciboParaSalvar = {
      nome_cliente: dadoInput.nome.trim(),
      documento_cliente: dadoInput.documento.trim(),
      valor: Number.isFinite(valorNumerico) ? valorNumerico : 0,
      cep: dadoInput.cep.trim(),
      logradouro: dadoInput.rua.trim(),
      numero: dadoInput.numero.trim(),
      complemento: dadoInput.complemento.trim(),
      bairro: dadoInput.bairro.trim(),
      cidade: dadoInput.cidade.trim(),
      estado: (dadoInput.uf || dadoInput.estado).trim().toUpperCase(),
      ponto_referencia: dadoInput.pontoReferencia.trim(),
    };

    try {
      await recibosAPI.post('/recibos', reciboParaSalvar);
      setDadosRecibo(dadoInput);
      setMostrarRecibo(true);
    } catch (error) {
      const mensagem = error.response?.data?.erro ||
        "Não foi possível salvar o recibo. Verifique se o backend e o banco estão funcionando.";
      setErroRecibo(mensagem);
      console.error("Erro ao salvar recibo:", error);
    } finally {
      setSalvandoRecibo(false);
    }
  };

  const handleImprimirRecibo = () => {
    if (!mostrarRecibo) return;
    window.print();
  };

  const handleSalvarPdf = async () => {
    if (!reciboRef.current) return;

    const recibo = reciboRef.current;
    recibo.classList.add("pdf-exporting");

    try {
      const canvas = await html2canvas(recibo, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });
      const imagem = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const larguraPagina = pdf.internal.pageSize.getWidth();
      const alturaImagem = (canvas.height * larguraPagina) / canvas.width;

      pdf.addImage(imagem, "PNG", 0, 0, larguraPagina, alturaImagem);
      pdf.save(`recibo-${dadosRecibo.nome || "cliente"}.pdf`);
    } finally {
      recibo.classList.remove("pdf-exporting");
    }
  };

  return (

    <div className="app">
      <Header />

      <main className="main-content">
        <div className="left-column">
          <div className="title">
            <h2>Novo Recibo e Endereço</h2>
            <p>
              Preencha os dados do cliente, inicie o CEP para autopreenchimento
              rápido e configure o valor.
            </p>
          </div>

          <div className="form-card">
            <ClienteForm dados={dadoInput} setDados={setDadoInput} />
            {erroRecibo && <p className="error-message">{erroRecibo}</p>}
          </div>
        </div>

        {mostrarRecibo && (
          <Recibo
            ref={reciboRef}
            dados={dadosRecibo}
            onImprimir={handleImprimirRecibo}
            onSalvarPdf={handleSalvarPdf}
          />
        )}
      </main>
      
      <ActionButtons
        onGerarRecibo={handleGerarRecibo}
        onImprimirRecibo={handleImprimirRecibo}
        onSalvarPdf={handleSalvarPdf}
        salvandoRecibo={salvandoRecibo}
      />

      {mostrarPopup && (
        <PopUp
          onClose={() => setMostrarPopup(false)}
        />
      )}

    </div>
  )
}

export default App
