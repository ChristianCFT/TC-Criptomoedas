import moeda from "../../assets/images/moeda.jpg";
import carteiraImg from "../../assets/images/carteira.jpg";
import ListaCarteiras from '../../components/ListaCarteiras/ListaCarteiras';
import "./inicial.css";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { me } from "../../services/auth.services";
import ModalCarteira from "../../components/ModalCarteira/ModalCarteira";
import { getDashboard } from "../../services/carteiras.services";

async function Inicial(){

    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if(!token){
        redirect("/");
    }

    const cookieHeader = cookieStore.toString();
    const dashboard = await getDashboard(cookieHeader);
    const usuario = await me(cookieHeader);

    return (    
        <>
            <header className="header-inicial">
                <h1>Olá, <span>{usuario.nome}</span>!</h1>
                <p>Bem-vindo de volta a TC Criptomoedas.</p>
            </header>

            <main className="main-inicial">
                <div className="area-informacoes">
                    <div id="patrimonio">
                        <img src={moeda.src} alt="Imagem Moeda" />
                        <div>
                            <p className="title">Patrimônio total</p>
                            <p className="valor">R$ <span>{dashboard.patrimonioTotal.toFixed(2)}</span></p>
                        </div>
                    </div>

                    <div id="qtd-carteira">
                        <img src={carteiraImg.src} alt="Imagem Carteira" />
                        <div>
                            <p className="title">Carteiras</p>
                            <p className="valor">{dashboard.quantidadeCarteiras}</p>
                        </div>
                    </div>
                </div>

                <div className="area-carteiras">
                    <div className="criar-carteira">
                        <div>
                            <h2>Minhas carteiras</h2>
                            <p>Acesse e gerencie suas carteiras.</p>
                        </div>

                        <ModalCarteira />

                    </div>
                    
                    
                    <ListaCarteiras carteiras={dashboard.carteiras} />
                    
                </div> 
            </main> 
        </>
    );
}

export default Inicial;