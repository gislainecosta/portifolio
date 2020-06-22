import React, { useState, useEffect } from "react";
import "./Pages.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from './../components/Menu';

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


const Projeto = () => {

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'projetos'}/>
                <section className='conteudo-principal'>
                    <p>Oi, eu sou o Projetos</p>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Projeto;
