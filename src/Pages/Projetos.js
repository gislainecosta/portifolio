import React, { useEffect, useState} from "react";
import { useHistory } from 'react-router';
import "./Pages.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from './../components/Menu';
import { listaProjetos } from '../ListaProjetos';
import styled  from 'styled-components';

const FotoProjeto = styled.img`
    width: 15vw;
    border-radius: ${props=>{
        if(props.isSite === true){
            return "none"
        }else{
            return "50%"
        }
    }};
    border: ${props => {
        if (props.isSite === true) {
            return "none"
        } else {
            return "solid 5px rgba(255, 255, 255, 0.849);"
        }
    }};
    box-shadow: ${props => {
        if (props.isSite === true) {
            return "none"
        } else {
            return "4px 4px 11px -3px rgba(0, 0, 0, 1)"
        }
    }}; 
`

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#037fff",
            contrastText: "#fff",
            light: "#99a0b7",
            dark: '#10121b'
        },
    },
});

const Projetos = () => {
    const history = useHistory();
    const [lista, setLista] = useState([])

    const goToPage = (id) =>{
        history.push(`/projetos/${id}` )
    }

    useEffect(()=>{
        setLista(listaProjetos)
    })

    const listaFront = lista.filter((projeto) => {
        return projeto.tipo == "front"
    }).map((projeto)=>{
        return <section key={projeto.id} className="projeto">
            <FotoProjeto isSite={projeto.isSite} className="foto-projeto" src={projeto.foto} alt="Foto do Projeto" />
            <section className="texto-projetos">
                <p><b><i>{projeto.nome}</i></b></p>
                <p>{projeto.contribuicao}</p>
                <button onClick={() => {goToPage(projeto.id)}}>Saiba Mais</button>
            </section>
        </section>
    })

    const listaBack = lista.filter((projeto) => {
        return projeto.tipo == "back"
    }).map((projeto) => {
        return <section key={projeto.id} className="projeto">
            <FotoProjeto isSite={projeto.isSite} className="foto-projeto" src={projeto.foto} alt="Foto do Projeto" />
            <section className="texto-projetos">
                <p><b><i>{projeto.nome}</i></b></p>
                <p>{projeto.contribuicao}</p>
                <button onClick={() => { goToPage(projeto.id) }}>Saiba Mais</button>
            </section>
        </section>
    })

    const listaDesign = lista.filter((projeto) => {
        return projeto.tipo == "mkt"
    }).map((projeto) => {
        return <section key={projeto.id} className="projeto">
            <FotoProjeto isSite={projeto.isSite} className="foto-projeto" src={projeto.foto} alt="Foto do Projeto" />
            <section className="texto-projetos">
                <p><b><i>{projeto.nome}</i></b></p>
                <p>{projeto.contribuicao}</p>
                <button onClick={() => { goToPage(projeto.id) }}>Saiba Mais</button>
            </section>
        </section>
    })

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'PROJETOS'}/>
                <section className='conteudo-principal'>
                    <h1>Meus projetos</h1>
                    <hr />

                    <h2>Front-end e Ui/Ux</h2>
                    <hr />
                    <section className="grid-projetos">
                        {listaFront}
                    </section>

                    <h2>Back-end</h2>
                    <hr />
                    <section className="grid-projetos">
                        {listaBack}
                    </section>

                    <h2>Design e Marketing</h2>
                    <hr />
                    <section className="grid-projetos">
                        {listaDesign}
                    </section>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Projetos;
