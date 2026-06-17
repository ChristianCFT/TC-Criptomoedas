import logo from "../assets/logos/logo-2.jpeg"
import "../styles/cadastro.css"

function Cadastro(){
    return(
        <main className="main-cadastro">
            <div className="layout-midia">
                <img src={logo} alt="LogoCT" />
            </div>

            <div className="layout-form">
                <form className="form-container">
                    <h2>Cadastre-se</h2>
                    <div id="campos">

                        <div className="bloco-campo">
                            <label className="label-cadastro" htmlFor="nome">Nome Completo</label>
                            <input className="input-cadastro" type="text" name="nome" id="nome" />
                        </div>

                        <div className="bloco-campo">
                            <label className="label-cadastro" htmlFor="email">E-mail</label>
                            <input className="input-cadastro" type="text" name="email" id="email" />
                        </div>

                        <div className="bloco-campo">
                            <label  className="label-cadastro" htmlFor="senha">Senha</label>
                            <input  className="input-cadastro" type="password" name="senha" id="senha" />
                        </div>

                    </div>
                    <p id="p-termos">Ao continuar, você concorda com os <a href="#">Termos de Uso</a> e <a href="">Política de Privacidade.</a></p>
                    <button type="submit" id="btn-add">Cadastrar</button>
                </form>
            </div>
        
        </main>
    );
}

export default Cadastro