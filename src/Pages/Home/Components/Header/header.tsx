import "./header.css";

const Header = () => {
    return(
        <header>
            <nav >

                <div className="cabecalho__container">
                    <img id="imagem1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png"/>
                    <a className="item">Produtos</a>
                    <a className="item">Indústrias</a>
                    <a className="item">Aprenda</a>
                    <a className="item">Suporte</a>
                    <a className="item">Empresa</a>
                    <img id="imagem2" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"/>
                    <a className="item" id="login">Login</a>
                </div>

            </nav>

            

        </header>
    )
}

export default Header;