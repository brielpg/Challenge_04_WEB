import "./footer.css";
import Imagem1 from "../../../../assets/imagem1.png";
import Imagem2 from "../../../../assets/imagem2.png";
import Imagem3 from "../../../../assets/imagem3.png";
import Telasalesforce from "../../../../assets/telasalesforce.png";

const Footer = () => {
    return(
            <footer className="footer__container">
                <div className="informacoes">
                    <a id="mensagem">Com o nosso Sales Cloud Professional Edition, você terá acesso a:</a>
                    <img id="imagem" src={Telasalesforce}/>
                </div>

                <div id="itens__descricoes">
                    <section className="descricoes">
                        <img className="im" width='43' height='43' src={Imagem1}/>
                        <a className="txt" >Dados pré-carregados e recursos para integrar os dados da sua empresa;</a>
                    </section>

                    <section className="descricoes">
                        <img className="im" width='43' height='43' src={Imagem2}/>
                        <a className="txt" >Processos, relatórios e dashboards pré-configurados;</a>
                    </section>

                    <section className="descricoes">
                        <img className="im" width='43' height='37' src={Imagem3}/>
                        <a className="txt">Experiências guiadas e guias sobre boas práticas de vendas;</a>
                    </section>
                </div>
            </footer>
    )
}

export default Footer;