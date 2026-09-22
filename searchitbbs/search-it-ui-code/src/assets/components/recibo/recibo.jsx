import "./recibo.css";
import CodigoBarras from "/src/assets/cod-barras.png";

export default function Recibo({ dados }) {
  
    const anoAtual = new Date().getFullYear();
    const numAleatorio = Math.floor(1000 + Math.random() * 9000);
    const codRecibo = `REC-${anoAtual}-${numAleatorio}`;

    const dataAgora = new Date();
    const dataFormatada = dataAgora.toLocaleDateString('pt-BR');
    const horaFormatada = dataAgora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const dataeHora = `${dataFormatada} às ${horaFormatada}`;

    return (
        <main className="main-preview">
            <header className="preview-header">
                <h3>Visualização do Recibo</h3>
                <p>Modelo pronto para impressão térmica ou salvamento em PDF.</p>
            </header>

            <section className="container">
                <div className="topo">
                    <h4>Recibo da entrega</h4>
                    <p>{codRecibo}</p>
                    <p>{dataeHora}</p>
                </div>

                <hr />

                <div className="container-valor">
                    <p>Valor total do recibo: 
                        <br/>
                        <span className="valor">{dados.valor || "R$ 0,00"}</span>
                    </p>
                </div>

                <hr />

                <div className="infos">
                    <div className="info-grupo">
                        <span>Destinatário / Cliente</span>
                        <p className="nome">{dados.nome || "Nome do Cliente"}</p>
                        <p className="documento">{dados.documento || "000.000.000-00"}</p>
                    </div>

                    <div className="info-grupo">
                        <span className="info-titulo">Endereço solicitado</span>
                        <p className="rua">{dados.rua ? `${dados.rua}, ${dados.numero}` : "Rua Exemplo, 000"}</p>
                        <p>{dados.complemento || "Complemento"}</p>
                        <p>{dados.bairro ? `${dados.bairro} - ${dados.cidade}` : "Bairro - Cidade / UF"}</p>
                    </div>

                    <div className="info-grupo">
                        <span className="info-titulo">CEP consultado</span>
                        <p className="cep">{dados.cep || "00000-000"}</p>
                    </div>
                </div>
            </section>
            
            <section className="codigo">
                <img src={CodigoBarras} alt="codigo de barras"/>
                <p>{codRecibo}</p>
            </section>

            <section className="container-button">
                <button>Imprimir Recibo</button>
                <button>Salvar PDF</button>
            </section>
        </main>
    );
}
