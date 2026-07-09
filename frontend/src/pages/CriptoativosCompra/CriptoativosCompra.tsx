"use client"

import TabelaMercadoCompra from "../../components/TabelaMercadoCompra/TabelaMercadoCompra";
import "../Criptoativos/criptoativos.css"

function CriptoativosCompra(){

    const mercadoGlobalCompra = [
        { 
            id: 1, 
            nome: "BitCoin", 
            sigla: "BTC", 
            preco: "368.123,45",
            variacao24h: 2.35, 
            marketCap: "7.150.000.000.000,00",
            imagemUrl: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
        },
        { 
            id: 2, 
            nome: "Ethereum", 
            sigla: "ETH", 
            preco: "15.432,10",
            variacao24h: -1.12, 
            marketCap: "1.850.000.000.000,00",
            imagemUrl: "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
        },
        { 
            id: 3, 
            nome: "Solana", 
            sigla: "SOL", 
            preco: "520,00",
            variacao24h: 5.80, 
            marketCap: "235.000.000.000,00",
            imagemUrl: "https://assets.coingecko.com/coins/images/4128/large/solana.png"
        },
        { 
            id: 4, 
            nome: "Cardano", 
            sigla: "ADA", 
            preco: "2,45",
            variacao24h: -0.45, 
            marketCap: "85.000.000.000,00",
            imagemUrl: "https://assets.coingecko.com/coins/images/975/large/cardano.png"
        }
    ];


    return(
        <>
            <header className="header-criptoativos">
                <h1>Olá, <span>Usuário</span>!</h1>
                <p>Faça a escolha do ativo que falta na sua carteira.</p>
            </header>

            <main className="main-criptoativos">
                <div id="mercado-moeda-global">
                    <TabelaMercadoCompra mercadoGlobalCompra={mercadoGlobalCompra}/>
                </div>
            </main>
        </>
    );
}

export default CriptoativosCompra;