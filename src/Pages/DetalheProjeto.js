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
import ImageGallery from 'react-image-gallery';

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
    width: ${props => {
        if (props.tela == "note") {
            return "40vw"
        } else if (props.tela == "mobile") {
            return "12vw"
        } else {
            return "15vw"
        }
    }};
    border-radius: ${props => {
    if (props.tipo == "front") {
            return "none"
        } else {
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
            return "45vw"
        } else {
            return "40vw"
        }
    }};
    }
`

const Projeto = (props) => {
    let history = useHistory();
    const pathParams = useParams();
    const [hoverRefGit, isHoveredGit] = useHover();
    const [hoverRefSite, isHoveredSite] = useHover();
    const [lista, setLista] = useState([]);
    const [imagens, setImagens] = useState([]);

    const goToProjetos = () => {
        history.push("/projetos")
    }

    useEffect(()=>{
        pegaLista()
    }, [listaProjetos])

    const pegaLista =()=>{

        const listagemProjetos = listaProjetos.filter((projeto) => {
            return projeto.id == pathParams.id
        })
        setLista(listagemProjetos[0])
        setImagens(listagemProjetos[0].fotos)
    }

    let otimizado = ""

    if (lista.tela === "note") {
        otimizado = "Desktop e Notebook"
    } else if (lista.tela === "mobile"){
        otimizado = "Dispositivos Móveis"
    }else{
        otimizado = "Todos os tipos de tela"
    }

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'PROJETOS'}/>
                <section className='conteudo-principal'>
                    <section className="cabecalho-projeto">
                        <FotoProjeto tela={lista.tela} tipo={lista.tipo} src={lista.foto} alt="Logo Projeto"/>
                        <section>
                            <p className="titulo-projeto">{lista.nome}</p>
                            <p className="descricao-projeto"><b>Descrição: </b>{lista.descricao}</p>
                            <p className="descricao-projeto"> <b>Contribuição: </b>{lista.contribuicao}</p>
                            <p><b>Otimizado para: </b>{otimizado}</p>
                            <section className="container-links-detalhe">
                                {lista.link !== "" ? <a target="_blank" href={lista.link}><img className='links-detalhe' ref={hoverRefSite} src={isHoveredSite ? SiteBlue : SiteGrey} alt='Link para Site do projeto' /></a>:<div></div>}
                                {lista.github !== "" ? <a target="_blank" href={lista.github}><img className='links-detalhe' ref={hoverRefGit} src={isHoveredGit ? GitBlue : GitGrey} alt='Link para Github' /></a> : <div></div>}
                                <button id="botao-voltar" onClick={goToProjetos}>Voltar</button>
                            </section>
                        </section>
                    </section>

                    <h2>Demonstração</h2>
                    <hr />
            <section id="galeria">
                        <ImageGallery items={imagens} thumbnailPosition={"left"} showIndex />
                    </section>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Projeto;
