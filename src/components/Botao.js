import React, { useState, useEffect } from "react";
import "./Components.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import styled from 'styled-components';

const Botao = styled.button`
    width: 95%;
    height: 5%;
    margin: 3% 0;
    margin-bottom: 2%;
    background-color: ${props => props.titulo === props.paginaAtual ? '#037fff' : 'rgba(255, 255, 255, 0)'};
    color:  ${props => props.titulo === props.paginaAtual ? '#fff' : '#99a0b7' };
    border: none;
    font-size: 1.5vw;
    transition: .6s;
    cursor: pointer;
    &:focus{
      outline: 0;
    }
    &:hover{
      background: #0381ffc9;
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

const BotaoMenu = (props) => {
    let history = useHistory();

    const goToPage = (page) =>{
        history.push(`/${page}`)
    }

    return (
        <ThemeProvider theme={MyTheme}>
            <Botao paginaAtual={props.paginaAtual} titulo={props.titulo} onClick={props.irPagina}>{props.titulo}</Botao>
        </ThemeProvider>
    );
};

export default BotaoMenu;