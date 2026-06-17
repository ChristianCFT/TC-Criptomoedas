import "../styles/criptoativos.css"

function Criptoativos(){
    return(
        <>
            <header>
                <h1>Olá, <span>Usuário</span>!</h1>
                <p>Faça a escolha do ativo que falta na sua carteira.</p>
            </header>

            <main>
                <div class="criptos">
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

                                <tr class="linha-ativo">

                                    <td class="coluna-cripto">

                                        <div class="ativo-cripto">

                                            <img src="/logo-img/logo-2.jpeg" alt="Bitcoin" />

                                            <div class="info-cripto">
                                                <p class="p-nome-moeda">BitCoin</p>
                                                <p class="p-sigla-moeda">BTC</p>
                                            </div>

                                        </div>

                                    </td>

                                    <td class="coluna-quantidade">
                                        0,1523 BTC
                                    </td>

                                    <td class="coluna-preco">
                                        R$ 368.123,45
                                    </td>

                                    <td class="coluna-valor-total">
                                        R$ 56.023,87
                                    </td>

                                    <td class="coluna-acoes">

                                        <div class="acoes-ativo">

                                            <button class="btn-comprar">Comprar</button>
                                            <button class="btn-vender">Vender</button>

                                        </div>

                                    </td>

                                </tr>

                                <tr class="linha-ativo">

                                    <td class="coluna-cripto">

                                        <div class="ativo-cripto">

                                            <img src="/logo-img/logo-2.jpeg" alt="Bitcoin" />

                                            <div class="info-cripto">
                                                <p class="p-nome-moeda">BitCoin</p>
                                                <p class="p-sigla-moeda">BTC</p>
                                            </div>

                                        </div>

                                    </td>

                                    <td class="coluna-quantidade">
                                        0,1523 BTC
                                    </td>

                                    <td class="coluna-preco">
                                        R$ 368.123,45
                                    </td>

                                    <td class="coluna-valor-total">
                                        R$ 56.023,87
                                    </td>

                                    <td class="coluna-acoes">

                                        <div class="acoes-ativo">

                                            <button class="btn-comprar">Comprar</button>
                                            <button class="btn-vender">Vender</button>

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