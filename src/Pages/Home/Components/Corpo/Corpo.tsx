import "./corpo.css";
import Header from '../Header/header.tsx'
import Busca from '../Corpo/busca.tsx'
import Tresprodutos from '../Corpo/tresprodutos'
import Testegratis from '../Corpo/testegratis'
import Grupo from '../Grupo/grupo'

const Corpo = () => {
    return(
        <main>
        <Header/>
        <Busca/>
        <div id="corpo">
            <h2>Bem-vindo à Salesforce!</h2>
            <div className="textos">
                <h3>Somos uma plataforma líder de gerenciamento de relacionamento com o cliente (CRM).</h3>
                <br/>
                <h3>Conecte-se com seus clientes, parceiros e funcionários de maneiras inovadoras, e centralize dados dos seus clientes para otimizar suas vendas e marketing</h3>
            </div>
        </div>
        <Tresprodutos/>
        <Testegratis/>
        <Grupo/>
        </main>
    )
}

export default Corpo;