import "../styles/criptoativos.css"

function Criptoativos(){
    return(
        <>
            <header className="header-criptoativos">
                <h1>Olá, <span>Usuário</span>!</h1>
                <p>Faça a escolha do ativo que falta na sua carteira.</p>
            </header>

            <main className="main-criptoativos">
                <div className="criptos">
                    <table id="tabela-ativos">

                            <thead>

                                <tr>
                                    <th>Criptomoeda</th>
                                    <th>Quantidade</th>
                                    <th>Preço Atual</th>
                                    <th>Valor Total</th>
                                    <th id="th-acoes">Ações</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr className="linha-ativo">

                                    <td className="coluna-cripto">

                                        <div className="ativo-cripto">

                                            <img src="/logo-img/logo-2.jpeg" alt="Bitcoin" />

                                            <div className="info-cripto">
                                                <p className="p-nome-moeda">BitCoin</p>
                                                <p className="p-sigla-moeda">BTC</p>
                                            </div>

                                        </div>

                                    </td>

                                    <td className="coluna-quantidade">
                                        0,1523 BTC
                                    </td>

                                    <td className="coluna-preco">
                                        R$ 368.123,45
                                    </td>

                                    <td className="coluna-valor-total">
                                        R$ 56.023,87
                                    </td>

                                    <td className="coluna-acoes">

                                        <div className="acoes-ativo">

                                            <button className="btn-comprar">Comprar</button>
                                            <button className="btn-vender">Vender</button>

                                        </div>

                                    </td>

                                </tr>

                                <tr className="linha-ativo">

                                    <td className="coluna-cripto">

                                        <div className="ativo-cripto">

                                            <img src="/logo-img/logo-2.jpeg" alt="Bitcoin" />

                                            <div className="info-cripto">
                                                <p className="p-nome-moeda">BitCoin</p>
                                                <p className="p-sigla-moeda">BTC</p>
                                            </div>

                                        </div>

                                    </td>

                                    <td className="coluna-quantidade">
                                        0,1523 BTC
                                    </td>

                                    <td className="coluna-preco">
                                        R$ 368.123,45
                                    </td>

                                    <td className="coluna-valor-total">
                                        R$ 56.023,87
                                    </td>

                                    <td className="coluna-acoes">

                                        <div className="acoes-ativo">

                                            <button className="btn-comprar">Comprar</button>
                                            <button className="btn-vender">Vender</button>

                                        </div>

                                    </td>

                                </tr>

                            </tbody>

                        </table>
                </div>
            </main>
        </>
    );
}

export default Criptoativos;