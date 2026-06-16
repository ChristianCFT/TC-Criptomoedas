import moeda from "../assets/images/moeda.png";
import carteira from "../assets/images/carteira.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/inicial.css"

function Inicial(){
    return (    
        <>
            <header>
                <h1>Olá, <span>Usuário</span>!</h1>
                <p>Bem-vindo de volta a TC Criptomoedas.</p>
            </header>

            <Navbar />

            <main>

                <div className="area-informacoes">

                    <div id="patrimonio">

                        <img src={moeda} alt="Imagem Moeda" />
                        <div>
                            <p className="title">Patrimônio total</p>
                            <p className="valor">R$ <span>9.999,99</span></p>
                        </div>

                    </div>

                    <div id="qtd-carteira">

                        <img src={carteira} alt="Imagem Carteira" />
                        <div>
                            <p className="title">Carteiras</p>
                            <p className="valor">***</p>
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
                    <div className="carteiras">


                    </div> 
                </div> 

            </main> 

            <Footer />
        </>
    );
}

export default Inicial;