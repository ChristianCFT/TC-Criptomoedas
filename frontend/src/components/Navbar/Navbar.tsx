import logo from "../../assets/logos/logo-2.jpeg";
import "./navbar.css"

function Navbar(){
    return(
        <nav className="navbar-container">

            <figure className="navbar-figure">
                <img className="navbar-img" src={logo.src} alt="Logo TC" />
                <figcaption className="navbar-figcaption">TC Criptomoedas</figcaption>
            </figure>

            <ul className="navbar-ul">

                <li className="navbar-li"><a className="navbar-a" id="inicio" href=""> Início</a></li>
                <li className="navbar-li"><a className="navbar-a" id="criptoativos" href="">Criptoativos</a></li>
                <li className="navbar-li"><a className="navbar-a" id="add-saldo" href="">Adicionar saldo</a></li>
                <li className="navbar-li"><a className="navbar-a" id="sair" href="">Sair</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;


