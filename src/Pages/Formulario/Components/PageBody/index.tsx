import "./formulario.css";
import React, { useState } from 'react';
import Header2 from '../Header/index.tsx'
import Footer from '../Footer/index.tsx'

interface FormValues {
  nome: string;
  sobrenome: string;
  cargo: string;
  email: string;
  telefone: string;
  empresa: string;
  ndefuncionario: number;
  pais: string;
  idioma: string;
}

const initialFormValues: FormValues = {
  nome: '',
  sobrenome: '',
  cargo: '',
  email: '',
  telefone: '',
  empresa: '',
  ndefuncionario: NaN,
  pais: '',
  idioma: '',
};

const Formulario = () => {
    const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    };

    return(
        <main>
        <Header2/>
        <form className="formulario__container">
            <div className="perguntas__formulario">
                <div id="caixa__perguntas">
                    <p>Por favor, preencha todos os campos</p>
                    <div>
                        <input
                        placeholder="Nome"
                        type="text"
                        id="nome"
                        name="nome"
                        value={formValues.nome}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="Sobrenome"
                        type="text"
                        id="sobrenome"
                        name="sobrenome"
                        value={formValues.sobrenome}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="Cargo"
                        type="text"
                        id="cargo"
                        name="cargo"
                        value={formValues.cargo}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="Email corporativo"
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="Telefone corporativo"
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formValues.telefone}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="Empresa/instituição"
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formValues.empresa}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="Número de Funcionários"
                        type="number"
                        id="ndefuncionario"
                        name="ndefuncionario"
                        value={formValues.ndefuncionario}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="País"
                        type="text"
                        id="pais"
                        name="pais"
                        value={formValues.pais}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="Idioma"
                        type="text"
                        id="idioma"
                        name="idioma"
                        value={formValues.idioma}
                        onChange={handleChange}
                        />
                    </div>
                    <button>Enviar</button>
                </div>
            </div>
        </form>
        <Footer/>
        </main>
    )
}

export default Formulario;