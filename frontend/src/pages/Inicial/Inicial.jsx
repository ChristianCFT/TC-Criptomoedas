import React from 'react';
import moeda from "@/assets/images/moeda.jpg";
import carteiraImg from "@/assets/images/carteira.jpg";
import ListaCarteiras from '@/components/ListaCarteiras.jsx/ListaCarteiras';
import "./inicial.css";



function Inicial(){
    const minhasCarteiras = [
        { id: 1, titulo: "Carteira Principal", saldo: "5.430,00" },
        { id: 2, titulo: "Reserva de Oportunidade", saldo: "1.200,50" },
        { id: 3, titulo: "Hold Longo Prazo", saldo: "3.369,49" },
        { id: 4, titulo: "Criptos Alternativas", saldo: "850,20" }
    ];

    return (    
        <>
            <header className="header-inicial">
                <h1>Olá, <span>Usuário</span>!</h1>
                <p>Bem-vindo de volta a TC Criptomoedas.</p>
            </header>

            <main className="main-inicial">
                <div className="area-informacoes">
                    <div id="patrimonio">
                        <img src={moeda} alt="Imagem Moeda" />
                        <div>
                            <p className="title">Patrimônio total</p>
                            <p className="valor">R$ <span>9.999,99</span></p>
                        </div>
                    </div>

                    <div id="qtd-carteira">
                        <img src={carteiraImg} alt="Imagem Carteira" />
                        <div>
                            <p className="title">Carteiras</p>
                            <p className="valor">{minhasCarteiras.length}</p>
                        </div>
                    </div>
                </div>

                <div className="area-carteiras">
                    <div className="criar-carteira">
                        <div>
                            <h2>Minhas carteiras</h2>
                            <p>Acesse e gerencie suas carteiras.</p>
                        </div>
                        <button>+ Criar carteira</button>
                    </div>
                    
                    
                    <ListaCarteiras carteiras={minhasCarteiras} />
                    
                </div> 
            </main> 
        </>
    );
}

export default Inicial;