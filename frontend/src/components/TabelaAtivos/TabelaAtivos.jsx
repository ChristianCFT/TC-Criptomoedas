import LinhaAtivo from './LinhaAtivo';
import './tabelaAtivos.css'

export default function TabelaAtivos() {
    // Simulando dados que viriam de uma API ou do estado (State) do React
    const meusAtivos = [
        { id: 1, moeda: "BitCoin", sigla: "BTC", quantidade: "0,1523", preco: "368.123,45", total: "56.023,87" },
        { id: 2, moeda: "Ethereum", sigla: "ETH", quantidade: "2,5000", preco: "15.432,10", total: "38.580,25" }
    ];

    return (
        <section id="secao-tabela-ativos">
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
                    {/* O map percorre a lista e cria uma LinhaAtivo para cada moeda */}
                    {meusAtivos.map((ativo) => (
                        <LinhaAtivo 
                            key={ativo.id} // O React exige uma 'key' única para itens em lista
                            moeda={ativo.moeda}
                            sigla={ativo.sigla}
                            quantidade={ativo.quantidade}
                            preco={ativo.preco}
                            total={ativo.total}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    );
}