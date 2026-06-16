import logo from "../assets/logos/logo-2.jpeg";
import "../styles/navbar.css"

function Navbar(){
    return(
        <nav>

            <figure>
                <img src={logo} alt="Logo TC" />
                <figcaption>TC Criptomoedas</figcaption>
            </figure>

            <ul>

                <li><a id="inicio" href=""> Início</a></li>
                <li><a id="criptoativos" href="">Criptoativos</a></li>
                <li><a id="add-saldo" href="">Adicionar saldo</a></li>
                <li><a id="sair" href="">Sair</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;


