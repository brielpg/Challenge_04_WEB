import "./busca.css";

const Busca = () => {
    return(
        
        <div id="divBusca">
            <h1>O que você esta buscando hoje?</h1>
            <div className="barra__pesquisa">
                <img width="94px" height="auto" src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png" className="pesquisar__img" alt="imagem lupinha" />
                <input type="search" className="pesquisar__input" placeholder="Digite aqui sua busca..." />
            </div>
        </div>
    )
}

export default Busca;