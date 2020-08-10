import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Pages.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from './../components/Menu';
import MeuIcone from "../img/eu_Icone.png";
import IconJs from "../img/javascript.png";
import IconCSS from "../img/css.png";
import IconHtml from "../img/html.png";
import IconPs from "../img/photoshop.png";
import IconTs from "../img/typescript.png";
import IconSql from "../img/sql.png";
import IconReact from "../img/react.png";

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

const Sobre = () => {
    let history = useHistory();

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'SOBRE'} />
                <section className='conteudo-principal'>
                    <p className="titulo-paginas" >Sobre mim</p>
                    <hr />
                    <section id="cabecalho-sobre">
                        <img src={MeuIcone} alt="Meu Ícone"/>
                        <p> Eu sou <span>Gislaine Costa Pereira</span></p>
                        <section id="texto-sobre">
                            <p>Estudante de Web Full Stack Development</p>
                            <p>36 anos</p>
                            <p>Florianópolis/SC</p>
                            <a target="_blank" href="https://drive.google.com/file/d/17-z3032YFTtSasg8n8V48pHiQiZ9wfeH/view?usp=sharing">&nbsp;&nbsp;Acessar CV&nbsp;&nbsp;</a>
                        </section>
                    </section>

                    <p className="subtitulo-paginas" >Minhas Skills</p>
                    <hr />
                    <section id="linguagens">
                        <img src={IconPs} />
                        <img src={IconHtml} />
                        <img src={IconCSS} />
                        <img src={IconJs} />
                        <img src={IconTs} />
                        <img src={IconReact} />
                        <img src={IconSql} />
                        
                    </section>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Sobre;
