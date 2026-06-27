import moeda from "@/assets/images/moeda.jpg"
import carteira from "@/assets/images/carteira.jpg";
import "./carteira.css"
function Carteira() {
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
                            src={moeda} 
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
                            src={carteira} 
                            alt="Carteira" 
                        />

                        <div>

                            <h3 className="title-card-resumo">
                                QUANTIDADE DE CRIPTOMOEDAS
                            </h3>

                            <p className="valor-card-resumo">
                                <span>8</span>
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
                    <section id="secao-tabela-ativos">

                    </section>


                </section>


            </main>

        </>
    );
}

export default Carteira;