import React from 'react';
import moeda from "../../assets/images/moeda.jpg"
import carteira from "../../assets/images/carteira.jpg";
import TabelaAtivos from "../../components/TabelaAtivos/TabelaAtivos";
import "./carteira.css"

interface CarteiraProps {
    id: number;
}

function Carteira({ id }: CarteiraProps) {
    // exemplo
   const meusAtivos = [
    { 
        id: 1, 
        imagem: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", // Exemplo com URL
        moeda: "Bitcoin", 
        sigla: "BTC", 
        quantidade: 0.025, 
        preco: "345.000,00",
        total: "8.625,00"
    },
    { 
        id: 2, 
        imagem: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        moeda: "Ethereum", 
        sigla: "ETH", 
        quantidade: 1.2, 
        preco: "18.500,00",
        total: "22.200,00"
    },
    { 
        id: 3, 
        imagem: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", // Exemplo com URL
        moeda: "Bitcoin", 
        sigla: "BTC", 
        quantidade: 0.025, 
        preco: "345.000,00",
        total: "8.625,00"
    },
    { 
        id: 4, 
        imagem: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", // Exemplo com URL
        moeda: "Bitcoin", 
        sigla: "BTC", 
        quantidade: 0.025, 
        preco: "345.000,00",
        total: "8.625,00"
    }
];

    return (
        <>
            {/* Cabeçalho */}
            <header className="header-carteira">
                <h1>
                    <span>Nome da Carteira</span>
                </h1>
                <p>
                    Gerencie seus ativos e acompanhe seu desempenho
                </p>
            </header>

            {/* Principal */}
            <main className="main-carteira">

                {/* Resumo */}
                <section id="resumo-carteira">

                    <div className="card-resumo">
                        <img 
                            src={moeda.src} 
                            alt="Moeda" 
                        />
                        <div>
                            <h3 className="title-card-resumo">
                                SALDO TOTAL DA CARTEIRA
                            </h3>
                            <p className="valor-card-resumo">
                                R$ <span>7399,99</span>
                            </p>
                        </div>
                    </div>

                    <div className="card-resumo">
                        <img 
                            src={carteira.src} 
                            alt="Carteira" 
                        />
                        <div>
                            <h3 className="title-card-resumo">
                                QUANTIDADE DE CRIPTOMOEDAS
                            </h3>

                            <p className="valor-card-resumo">
                                <span>{meusAtivos.length}</span>
                            </p>
                            <p id="p-dif">
                                Ativos diferentes
                            </p>
                        </div>
                    </div>

                </section>

                {/* Ativos */}
                <section id="ativos">

                    {/* Cabeçalho ativos */}
                    <section id="cabecalho-ativos">
                        <div className="conteudo-cabecalho">
                            <h2>
                                Seus Ativos
                            </h2>
                            <p>
                                Veja suas criptomoedas e gerencie suas posições
                            </p>
                        </div>

                        <div className="acoes-cabecalho">
                            <button id="btn-comprar-cripto">
                                Comprar Criptomoeda
                            </button>
                        </div>
                    </section>

                    {/* Tabela */}
                    <TabelaAtivos ativos={meusAtivos} />
                    

                </section>

            </main>
        </>
    );
}

export default Carteira;