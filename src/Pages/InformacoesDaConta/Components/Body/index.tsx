import "./style.css";
import Header from '../Header/index.tsx'
import profilelogo from '../../../../assets/profile-logo.png'
import { useState } from 'react'
import axios from 'axios'

const InfoConta = () => {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [cargo, setCargo] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [pais, setPais] = useState("")
    const [idioma, setIdioma] = useState("")
    const [cpf, setCpf] = useState("")
    const [nfuncionarios, setNfuncionarios] = useState("")

    const req = async ()=> {
    try{
      const response = await axios({
        method: "post",
        url: "",
        headers: {"Content-Type": "application/json"},
        data: {
          "nome": nome,
          "sobrenome" : sobrenome,
          "telefone" : telefone,
          "email" : email,
          "cargo" : cargo,
          "empresa" : empresa,
          "pais" : pais,
          "idioma" : idioma,
          "cpf" : cpf,
          "nfuncionarios" : nfuncionarios
        }
      })
      console.log(response);
    }catch(err){
      console.log(err)
      
    }
  }

    return(
        <main>
            <Header/>
            <div id="main">
                <div id="perfil-botao">
                    <p>PERFIL</p>
                </div>
                <div id="corpo">
                    <div id="esquerda">
                        <img src={profilelogo} alt="Foto de Perfil"/>
                        <button>TROCAR</button>
                    </div>
                    <div id="direita">
                        <div id="form">
                            <div id="dois">
                            <div className="form__group field">
                                <input onChange={(e) => setNome(e.target.value)} type="text" name="nome" placeholder="nome" className="form__field" required />
                                <label className="form__label">nome</label>
                            </div>

                            <div className="form__group field">
                                <input onChange={(e) => setSobrenome(e.target.value)} type="text" name="sobrenome" placeholder="sobrenome" className="form__field" required />
                                <label className="form__label">sobrenome</label>
                            </div>
                            </div>
                            
                            <div id="dois">
                            <div className="form__group field">
                                <input onChange={(e) => setTelefone(e.target.value)} type="text" name="telefone" placeholder="telefone" className="form__field" required />
                                <label className="form__label">telefone</label>
                            </div>

                            <div className="form__group field">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="email" className="form__field" required />
                                <label className="form__label">email</label>
                            </div>
                            </div>
                            

                            <div id="dois">
                            <div className="form__group field">
                                <input onChange={(e) => setCargo(e.target.value)} type="text" name="cargo" placeholder="cargo" className="form__field" required />
                                <label className="form__label">cargo</label>
                            </div>

                            <div className="form__group field">
                                <input onChange={(e) => setEmpresa(e.target.value)} type="text" name="empresa" placeholder="empresa" className="form__field" required />
                                <label className="form__label">empresa</label>
                            </div>
                            </div>

                            <div id="dois">
                            <div className="form__group field">
                                <input onChange={(e) => setPais(e.target.value)} type="text" name="pais" placeholder="pais" className="form__field" required />
                                <label className="form__label">país</label>
                            </div>

                            <div className="form__group field">
                                <input onChange={(e) => setIdioma(e.target.value)} type="text" name="idioma" placeholder="idioma" className="form__field" required />
                                <label className="form__label">idioma</label>
                            </div>
                            </div>

                            <div id="dois">
                            <div className="form__group field">
                                <input onChange={(e) => setCpf(e.target.value)} type="text" name="cpf" placeholder="cpf" className="form__field" required />
                                <label className="form__label">cpf</label>
                            </div>

                            <div className="form__group field">
                                <input onChange={(e) => setNfuncionarios(e.target.value)} type="number" name="nfuncionarios" placeholder="nfuncionarios" className="form__field" required />
                                <label className="form__label">nº funcionários</label>
                            </div>
                            </div>

                            <input id="btn" onClick={req} type="submit" value="SALVAR"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default InfoConta;