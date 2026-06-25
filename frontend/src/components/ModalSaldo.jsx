import "../styles/modalSaldo.css"
import boleto from "../assets/images/boleto.png"
import cartao from "../assets/images/cartao de credito.png"
import pix from "../assets/images/pix.png"

function ModalSaldo() {
    return (
        <>
            <div id="overlaySaldo" className="overlay">

                <div className="modal-saldo">

                    <div className="modal-header">

                        <h2>Adicionar saldo</h2>

                        <button
                            id="fecharModalSaldo"
                            className="btn-fechar"
                        >
                            ✕
                        </button>

                    </div>

                    <div className="modal-body">

                        <label htmlFor="valor">
                            Valor
                        </label>

                        <input
                            type="number"
                            id="valor"
                            placeholder="Digite o valor"
                        />

                        <label className="titulo-metodo">
                            Método de pagamento
                        </label>

                        <div className="metodos">

                            {/* PIX */}

                            <label className="opcao">

                                <input
                                    type="radio"
                                    name="pagamento"
                                />

                                <img
                                    src={pix}
                                    alt="PIX"
                                    className="icone-pagamento"
                                />

                                <span>PIX</span>

                            </label>

                            {/* Cartão */}

                            <label className="opcao">

                                <input
                                    type="radio"
                                    name="pagamento"
                                />

                                <img
                                    src={cartao}
                                    alt="Cartão"
                                    className="icone-pagamento"
                                />

                                <span>Cartão de Crédito</span>

                            </label>

                            {/* Boleto */}

                            <label className="opcao">

                                <input
                                    type="radio"
                                    name="pagamento"
                                />

                                <img
                                    src={boleto}
                                    alt="Boleto"
                                    className="icone-pagamento"
                                />

                                <span>Boleto Bancário</span>

                            </label>

                        </div>

                    </div>

                    <div className="modal-footer">

                        <button
                            id="cancelarSaldo"
                            className="btn-cancelar"
                        >
                            Cancelar
                        </button>

                        <button
                            id="adicionarSaldo"
                            className="btn-adicionar"
                        >
                            Adicionar saldo
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}

export default ModalSaldo;