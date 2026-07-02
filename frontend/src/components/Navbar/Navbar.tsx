"use client";
import { toast } from "sonner";
import logo from "../../assets/logos/logo-2.jpeg";
import { logout } from "../../services/auth.services";
import "./navbar.css"
import { useRouter } from "next/navigation";

function Navbar(){

    const router = useRouter();
    const handleLogout = async () =>{
        try{
            await logout();
            toast.success("Logout realizado com sucesso!");

            router.push("/");
            router.refresh();
        } catch(error){
            toast.error("Erro ao realizar logout!");
        }
    }

    return(
        <nav className="navbar-container">

            <figure className="navbar-figure">
                <img className="navbar-img" src={logo.src} alt="Logo TC" />
                <figcaption className="navbar-figcaption">TC Criptomoedas</figcaption>
            </figure>

            <ul className="navbar-ul">

                <li className="navbar-li">
                    <button className="navbar-button" id="inicio">Início</button>
                </li>

                <li className="navbar-li">
                    <button className="navbar-button" id="criptoativos">Criptoativos</button>
                </li>

                <li className="navbar-li">
                    <button className="navbar-button" id="add-saldo">Adicionar saldo</button>
                </li>

                <li className="navbar-li">
                    <button className="navbar-button" id="sair" onClick={handleLogout}>Sair</button>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;


