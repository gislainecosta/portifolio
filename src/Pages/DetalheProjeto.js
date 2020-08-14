import React, { useState, useEffect } from "react";
import "./Pages.css";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from '../components/Menu';
import { listaProjetos } from '../ListaProjetos';
import { useParams } from "react-router";
import { useHover } from './../Hooks/useHover';
import SiteGrey from "../img/siteGray.png";
import SiteBlue from "../img/siteBlue.png";
import GitGrey from '../img/git-grey.svg';
import GitBlue from '../img/git-blue.svg';
import styled from 'styled-components';

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

const FotoProjeto = styled.img`
    width: 25vw;
    border-radius: ${props => {
        if (props.isSite === true) {
            return "none"
        } else {
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

const Projeto = (props) => {
    let history = useHistory()
    const [hoverRefGit, isHoveredGit] = useHover();
    const [hoverRefSite, isHoveredSite] = useHover();
    const pathParams = useParams();
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        const listagemProjetos = listaProjetos.filter((projeto) => {
            return projeto.id == pathParams.id
        })
        setLista(listagemProjetos)
    })

    const goToProjetos = () => {
        history.push("projetos")
        console.log("Funfou botão")
    }

    const listagemProjetos = listaProjetos.filter((projeto) => {
        return projeto.id == pathParams.id
    })

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'PROJETOS'}/>
                <section className='conteudo-principal'>
                    <section className="cabecalho-projeto">
                        <FotoProjeto isSite={listagemProjetos[0].isSite} className="foto-projeto" src={listagemProjetos[0].foto} alt="Logo Projeto"/>
                        <section>
                            <p className="titulo-projeto">{listagemProjetos[0].nome}</p>
                            <p className="descricao-projeto">{listagemProjetos[0].descricao}</p>
                            <button className="botao" onClick={goToProjetos}>Voltar aos Projetos</button>
                            <section className="container-links-detalhe">
                                {listagemProjetos[0].link !== "" ? <a target="_blank" href={listagemProjetos[0].link}><img className='links-detalhe' ref={hoverRefSite} src={isHoveredSite ? SiteBlue : SiteGrey} alt='Link para Site do projeto' /></a>:<div></div>}
                                {listagemProjetos[0].github !== "" ? <a target="_blank" href={listagemProjetos[0].github}><img className='links-detalhe' ref={hoverRefGit} src={isHoveredGit ? GitBlue : GitGrey} alt='Link para Github' /></a> : <div></div>}
                            </section>
                        </section>
                    </section>
                    
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Projeto;
