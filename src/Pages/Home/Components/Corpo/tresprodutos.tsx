import "./tresprodutos.css";
import image4 from '../../../../assets/image_4.png';
import image12 from '../../../../assets/image_12.png';
import image13 from '../../../../assets/image_13.png';

const tresprodutos = () => {
    return(

        <div className='imagens__container'>
            <div className="produto1">
                <img className="img1" src={image13} alt="engrenagem girando"/>
                <p>Gerenciamento da empresa de forma fácil</p>
            </div>
            <div className="produto2">
                <img className="img1" src={image4} alt="tela de computador"/>
                <p>Compilação e visualização de dados</p>
            </div>
            <div className="produto3">
                <img className="img1" src={image12} alt="uma arvore cerebral" />
                <p>Inteligência artificial para automatizar rotinas e processos</p>
            </div>
         </div>
    )
}
        
export default tresprodutos;