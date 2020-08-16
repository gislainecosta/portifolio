import React, { useEffect, useState} from "react";
import { useHistory } from 'react-router';
import "./Pages.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from './../components/Menu';
import { listaProjetos } from '../ListaProjetos';
import styled  from 'styled-components';

const FotoProjeto = styled.img`
    width: ${props => {
        if (props.tela == "note") {
            return "20vw"
        } else if (props.tela == "mobile"){
            return "10vw"
        }else{
            return "15vw"
        }
    }};
    margin-left:${props => {
        if (props.tela == "mobile") {
            return "15%"
        } else {
            return "0"
        }
    }};
    border-radius: ${props=>{
        if (props.tipo == "front") {
            return "none"
        }else{
            return "50%"
        }
    }};
    border: ${props => {
        if (props.tipo == "front") {
            return "none"
        } else {
            return "solid 5px rgba(255, 255, 255, 0.849);"
        }
    }};
    box-shadow: ${props => {
        if (props.tipo == "front") {
            return "none"
        } else {
            return "4px 4px 11px -3px rgba(0, 0, 0, 1)"
        }
    }}; 
    
    @media only screen and (max-device-width: 900px) {
        width: ${props => {
            if (props.tela == "note") {
                return "40vw"
            } else if (props.tela == "mobile") {
                return "20vw"
            } else {
                return "25vw"
            }
        }};
        border: ${props => {
            if (props.tipo == "front") {
                return "none"
            } else {
                return "solid 2.5px rgba(255, 255, 255, 0.849);"
            }
        }};
        margin-left:${props => {
            if (props.tela == "mobile") {
                return "10%"
            } else {
                return "0"
            }
        }};
    }
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
    }, [listaProjetos])

    const listaFront = lista.filter((projeto) => {
        return projeto.tipo == "front"
    }).map((projeto)=>{
        return <section key={projeto.id} className="projeto">
            <FotoProjeto tipo={projeto.tipo} tela={projeto.tela} src={projeto.foto} alt="Foto do Projeto" />
            <section className="texto-projetos">
                <p><b><i>{projeto.nome}</i></b></p>
                <button onClick={() => {goToPage(projeto.id)}}>Saiba Mais</button>
            </section>
        </section>
    })

    const listaBack = lista.filter((projeto) => {
        return projeto.tipo == "back"
    }).map((projeto) => {
        return <section key={projeto.id} className="projeto">
            <FotoProjeto tipo={projeto.tipo} src={projeto.foto} alt="Foto do Projeto" />
            <section className="texto-projetos">
                <p><b><i>{projeto.nome}</i></b></p>
                <h3>{projeto.contribuicao}</h3>
                <a target="_blank" href={projeto.github}>Github</a>
            </section>
        </section>
    })

    const listaDesign = lista.filter((projeto) => {
        return projeto.tipo == "mkt"
    }).map((projeto) => {
        return <section key={projeto.id} className="projeto">
            <FotoProjeto tipo={projeto.tipo} tela={projeto.tela} src={projeto.foto} alt="Foto do Projeto" />
            <section className="texto-projetos">
                <p><b><i>{projeto.nome}</i></b></p>
                <h3>{projeto.contribuicao}</h3>
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
