import { forwardRef, useState } from "react";
import "./recibo.css";
import CodigoBarras from "/src/assets/cod-barras.png"

function Recibo({ dados, onImprimir, onSalvarPdf }, ref) {
    const [dadosGeracao] = useState(() => {
        const dataAgora = new Date();
        const anoAtual = dataAgora.getFullYear();
        const numAleatorio = Math.floor(1000 + Math.random() * 9000);
        const dataFormatada = dataAgora.toLocaleDateString('pt-BR');
        const horaFormatada = dataAgora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        return {
            codRecibo: `REC-${anoAtual}-${numAleatorio}`,
            dataeHora: `${dataFormatada} às ${horaFormatada}`,
        };
    });

    const { codRecibo, dataeHora } = dadosGeracao;

    return (
        <main ref={ref} className="main-preview">
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
                        <p>{dados.complemento || null}</p>
                        <p>{dados.bairro ? `${dados.bairro} - ${dados.cidade} / ${dados.uf}` : "Bairro - Cidade / UF"}</p>
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
                <button type="button" onClick={onImprimir}>Imprimir Recibo</button>
                <button type="button" onClick={onSalvarPdf}>Salvar PDF</button>
            </section>
        </main>
    )
}

export default forwardRef(Recibo);
