// TabelaMercado.jsx
import '../TabelaAtivos/tabelaAtivos.css'; // Novamente, reaproveitando o CSS da estrutura da tabela
import LinhaMercado from './LinhaMercado';

export default function TabelaMercado() {
    // Simulando os dados do mercado global (todas as moedas disponíveis)
    const mercadoGlobal = [
        { id: 1, moeda: "BitCoin", sigla: "BTC", preco: "368.123,45" },
        { id: 2, moeda: "Ethereum", sigla: "ETH", preco: "15.432,10" },
        { id: 3, moeda: "Solana", sigla: "SOL", preco: "520,00" },
        { id: 4, moeda: "Cardano", sigla: "ADA", preco: "2,45" }
    ];

    return (
        <section id="secao-tabela-ativos">
            <table id="tabela-ativos">
                
                {/* Cabeçalho simplificado */}
                <thead>
                    <tr>
                        <th>Criptomoeda</th>
                        <th>Preço Atual</th>
                    </tr>
                </thead>

                {/* Corpo da tabela usando o .map() para desenhar as linhas do mercado */}
                <tbody>
                    {mercadoGlobal.map((cripto) => (
                        <LinhaMercado 
                            key={cripto.id}
                            moeda={cripto.moeda}
                            sigla={cripto.sigla}
                            preco={cripto.preco}
                        />
                    ))}
                </tbody>
                
            </table>
        </section>
    );
}