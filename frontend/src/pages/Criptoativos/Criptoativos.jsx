import "../styles/criptoativos.css"
import TabelaMercado from "@/components/TabelaMercado/TabelaMercado";

function Criptoativos(){

    // Simulando os dados do mercado global (todas as moedas disponíveis)
    const mercadoGlobal = [
        { id: 1, moeda: "BitCoin", sigla: "BTC", preco: "368.123,45" },
        { id: 2, moeda: "Ethereum", sigla: "ETH", preco: "15.432,10" },
        { id: 3, moeda: "Solana", sigla: "SOL", preco: "520,00" },
        { id: 4, moeda: "Cardano", sigla: "ADA", preco: "2,45" }
    ];


    return(
        <>
            <header className="header-criptoativos">
                <h1>Olá, <span>Usuário</span>!</h1>
                <p>Faça a escolha do ativo que falta na sua carteira.</p>
            </header>

            <main className="main-criptoativos">
                <div id="mercado-moeda-global">
                    <TabelaMercado mercadoGlobal={mercadoGlobal}/>
                </div>
            </main>
        </>
    );
}

export default Criptoativos;