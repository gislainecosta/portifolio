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


const Contato = () => {

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'contato'} />
                <section className='conteudo-principal'>
                    <p>Oi, eu sou o Contato</p>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Contato;
