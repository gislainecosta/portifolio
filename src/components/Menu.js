import React, { useState, useEffect } from "react";
import "./Components.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Perfil from '../img/Perfil.jpg';
import { useHistory } from "react-router";
import styled from 'styled-components';
import BotaoMenu from './Botao';

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
    let history = useHistory();


    const goToPage = (page) =>{
        history.push(`/${page}`)
    }

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="container-menu">
                <img src={Perfil} alt="Foto Perfil" />
                <hr />
                <BotaoMenu paginaAtual={props.paginaAtual} titulo={'HOME'} irPagina={() =>{goToPage('')}} />  
                <BotaoMenu paginaAtual={props.paginaAtual} titulo={'SOBRE'} irPagina={() => {goToPage('sobre')}} />  
                <BotaoMenu paginaAtual={props.paginaAtual} titulo={'PROJETOS'} irPagina={() => {goToPage('projetos')}} />  
                <BotaoMenu paginaAtual={props.paginaAtual} titulo={'CONTATO'} irPagina={() =>{goToPage('contato')}} />  
                <hr />
                <span id='autoria'> by Gislaine Costa </span>
            </div>
        </ThemeProvider>
    );
};

export default Menu;