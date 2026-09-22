import Header from "../src/assets/components/header/header"
import ClienteForm from "../src/assets/components/clienteForm/cliente";
import EnderecoForm from "../src/assets/components/enderecoForm/endereco";
import ActionButtons from "../src/assets/components/actionButtons/action";
import "./App.css";
import Recibo from "../src/assets/components/recibo/recibo";
import PopUp from "../src/assets/components/popUp/popUp"

function App() {
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
            <ClienteForm />
            <EnderecoForm />
          </div>

        </div>
      <Recibo />

      </main>

      
       <ActionButtons
        onPdfSaved={() => setMostrarPopup(true)}
      />

      {mostrarPopup && (
        <Popup
          onClose={() => setMostrarPopup(false)}
        />
      )}
     

    </div>
  );
}

export default App;