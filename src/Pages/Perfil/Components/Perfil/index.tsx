import "./style.css";
import Header from '../Header/index.tsx'

const Perfil = () => {
    return(
        <main>
            <Header/>
            <div id="main">
                <div id="perfil">
                    <img src="../../../../assets/profile-logo.png"/>
                    <p>NOME SOBRENOME</p>
                    <div id="informacoes">
                        <div id="telefone">
                            <img/>
                            <p></p>
                        </div>
                        <div id="email">
                            <img/>
                            <p></p>
                        </div>
                        <div id="empresa">
                            <img/>
                            <p></p>
                        </div>
                        <div id="pais">
                            <img/>
                            <p></p>
                        </div>

                        <button>ATUALIZAR INFORMAÇÕES</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Perfil;