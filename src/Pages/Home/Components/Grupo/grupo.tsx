import "./grupo.css";
import pescarolli from '../../../../assets/gabrielpescarolli.png';
import fossatti from '../../../../assets/gabrielfossatti.png';

const Grupo = () => {
    return(
        
        <div id="grupo">
            <div className="Titulo">
                <h1>Integrantes do grupo</h1>
            </div>
            <div className="gabriel__pescarolli">
                <p>Nome: Gabriel Pescarolli Galiza</p>
                <p>RM: 554012</p>
                <p>Linkedin: gabriel-pescarolli-galiza-542222289</p>
                <p>Foto:</p>
                <img width="266px" height="256px" src={pescarolli} className="img__grupo" alt="Imagem de Gabriel Pescarolli" />
            </div>
            <div className="gabriel__fossatti">
                <p>Nome: Gabriel Fossatti Beltran</p>
                <p>RM: 552798</p>
                <p>Instagram: @biel_fossatti</p>
                <p>Foto: </p>
                <img id="imgultima" width="266px" height="256px" src={fossatti} className="img__grupo" alt="Imagem de Gabriel Fossatti" />
            </div>
        </div>
    )
}

export default Grupo;