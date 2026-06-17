import logo from "../assets/logos/logo-2.jpeg";
import "../styles/login.css"

function Login(){
    return (
        <>
            <header className="header-login">
                <img src={logo} alt="LogoCT" />
            </header>

            <main className="main-login">

                <form>

                    <div className="container-principal" >

                        <div id="acessar">
                            <p>Acessar Conta</p>
                        </div>

                        <div className="inputs">
                            <label className="label-login" htmlFor="email">E-mail</label>
                            <input className="input-login" type="text" id="email" placeholder="E-mail" />
                            <label className="label-login" htmlFor="senha">Senha</label>
                            <input className="input-login" type="password" id="senha" placeholder="Senha" />
                        </div>

                        <a id="esqueci-senha" href="#">Esqueci minha senha</a>

                        <button className="btn-login" type="submit" id="btn-acessar">ACESSAR CONTA</button>

                    </div>

                    <a id="cadastrar" href="#">CADASTRE-SE AGORA MESMO</a>

                </form>

            </main>
        </>
    );
}

export default Login;