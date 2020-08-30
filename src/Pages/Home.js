import React, { useState, useEffect } from "react";
import "./Pages.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from './../components/Menu';
import GitGrey from '../img/git-grey.svg';
import GitBlue from '../img/git-blue.svg';
import FaceGrey from '../img/face-gray.svg';
import FaceBlue from '../img/face-blue.svg';
import LinkeGrey from '../img/linkedin-grey.svg';
import LinkeBlue from '../img/linkedin-blue.svg';
import { useHover } from './../Hooks/useHover';

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


const Home = () => {
    const [hoverRefGit, isHoveredGit] = useHover();
    const [hoverRefFace, isHoveredFace] = useHover();
    const [hoverRefLinke, isHoveredLinke] = useHover();
    
    return (
        <ThemeProvider theme={MyTheme}>
            <div id="tela-toda-home">
                <Menu paginaAtual={'HOME'}/>
                <section id='conteudo-principal-home'>
                    <p id="ola">Olá, eu sou a <span id='name'>Gislaine Costa Pereira</span></p>
                    <p id="texto-home">Estudante de Web Full Stack Development, com experiência em Front-end, Ux/Ui, Design e Marketing </p>
                    
                    <section>
                        <a target="_blank" href='https://github.com/gislainecosta'><img className='redes-sociais' ref={hoverRefGit} src={isHoveredGit ? GitBlue : GitGrey} alt='Link para Github' /></a>
                        <a target="_blank" href='https://www.linkedin.com/in/gislainecostapereira'><img className='redes-sociais' ref={hoverRefLinke} src={isHoveredLinke ? LinkeBlue : LinkeGrey} alt='link para Linkedin' /></a>
                        <a target="_blank" href='https://www.facebook.com/gislainecostapereira'><img className='redes-sociais' ref={hoverRefFace} src={isHoveredFace ? FaceBlue : FaceGrey} alt='link para Facebook' /></a>
                    </section>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Home;
