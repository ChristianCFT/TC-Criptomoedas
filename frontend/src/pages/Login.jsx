import logo from "../assets/logos/logo-2.jpeg";
import "../styles/login.css"

function Login(){
    return (
        <>
            <header>
                <img src={logo} alt="LogoCT" />
            </header>

            <main>

                <form>

                    <div className="container-principal" >

                        <div id="acessar">
                            <p>Acessar Conta</p>
                        </div>

                        <div className="inputs">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" placeholder="E-mail" />
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" placeholder="Senha" />
                        </div>

                        <a id="esqueci-senha" href="#">Esqueci minha senha</a>

                        <button type="submit" id="btn-acessar">ACESSAR CONTA</button>

                    </div>

                    <a id="cadastrar" href="#">CADASTRE-SE AGORA MESMO</a>

                </form>

            </main>
        </>
    );
}

export default Login;