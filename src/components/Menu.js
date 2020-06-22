import React, { useState, useEffect } from "react";
import "./Components.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Perfil from '../img/Perfil.png';
import { useHistory } from "react-router";
import styled from 'styled-components';

const Botao = styled.button`
    width: 95%;
    height: 8%;
    margin: 3% 0;
    margin-bottom: 2%;
    background-color: ${props => props.paginaProps === props.paginaAtual ? '#037fff' : 'rgba(255, 255, 255, 0)'};
    color:  ${props => props.paginaProps === props.paginaAtual ? '#fff' : '#99a0b7' };
    border: none;
    font-size: 1.8vw;
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

const Menu = (props) => {
    const [paginaAtual, setPaginaAtual] = useState()
    let history = useHistory();

    useEffect(() => {
        let urlAtual = window.location.href;
        setPaginaAtual(urlAtual)
    })


    const goToPage = (page) =>{
        history.push(`/${page}`)
    }

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="container-menu">
                <img src={Perfil} alt="Foto Perfil" />
                <hr />
                <Botao paginaProps={props.paginaAtual} paginaAtual={paginaAtual} onClick={() =>{goToPage('')}}> HOME </Botao>
                <Botao paginaProps={props.paginaAtual} paginaAtual={paginaAtual} onClick={() => {goToPage('sobre')}}> SOBRE </Botao>
                <Botao paginaProps={props.paginaAtual} paginaAtual={paginaAtual} onClick={() => {goToPage('resumo')}}> RESUMO </Botao>
                <Botao paginaProps={props.paginaAtual} paginaAtual={paginaAtual} onClick={() => {goToPage('projetos')}}> PROJETOS </Botao>
                <Botao paginaProps={props.paginaAtual} paginaAtual={paginaAtual} onClick={() =>{goToPage('contato')}}> CONTATO </Botao>
            </div>
        </ThemeProvider>
    );
};

export default Menu;