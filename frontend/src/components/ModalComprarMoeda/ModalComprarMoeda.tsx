"use client";

import { useState } from "react";
import "./modalComprarMoeda.css";

interface ModalComprarMoedaProps {
    fechar: () => void;
}

function ModalComprarMoeda({ fechar }: ModalComprarMoedaProps) {

    const [valor, setValor] = useState("");

    async function comprarMoeda() {

        if (valor.trim() === "") {
            alert("Digite o valor da compra.");
            return;
        }

        try {

            // Aqui ficará a chamada da API
            console.log("Comprar moeda:", valor);

            //await comprarMoeda({
            //    valor: Number(valor)
            //});

            setValor("");
            fechar();

        } catch (error) {

            console.error(error);
            alert("Erro ao comprar moeda.");

        }

    }

    return (
        <div className="overlay">

            <div className="modal-compra">

                <div className="modal-header">

                    <h2>Comprar moeda</h2>

                    <button
                        className="btn-fechar"
                        onClick={fechar}
                    >
                        ✕
                    </button>

                </div>

                <div className="modal-body">

                    <label htmlFor="valorCompra">
                        Valor da compra (R$)
                    </label>

                    <input
                        id="valorCompra"
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        placeholder="R$ "
                    />

                </div>

                <div className="modal-footer">

                    <button
                        className="btn-cancelar"
                        onClick={fechar}
                    >
                        Cancelar
                    </button>

                    <button
                        className="btn-confirmar"
                        onClick={comprarMoeda}
                    >
                        Comprar
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ModalComprarMoeda;