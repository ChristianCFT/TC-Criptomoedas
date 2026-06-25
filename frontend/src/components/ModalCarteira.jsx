import "../styles/modalCarteira.css"

function ModalCarteira(){
    return(
        <>
            <div id="overlay" className="overlay">

                <div className="modal-carteira">

                    <div className="modal-header">

                        <h2>Criar carteira</h2>

                        <button id="fecharModal" className="btn-fechar">
                            ✕
                        </button>

                    </div>

                    <div className="modal-body">

                        <label htmlFor="nomeCarteira">
                            Nome da carteira
                        </label>

                        <input
                            type="text"
                            id="nomeCarteira"
                            placeholder="Nome da carteira"
                        />

                    </div>

                    <div className="modal-footer">

                        <button
                            id="cancelar"
                            className="btn-cancelar"
                        >
                            Cancelar
                        </button>

                        <button
                            id="criar"
                            className="btn-criar"
                        >
                            Criar carteira
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}

export default ModalCarteira;