import moeda from "../assets/images/moeda.jpg";
import carteira from "../assets/images/carteira.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/inicial.css"

function Inicial(){
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
                    <div className="area-carteiras-grid">


                    </div> 
                </div> 

            </main> 

        </>
    );
}

export default Inicial;