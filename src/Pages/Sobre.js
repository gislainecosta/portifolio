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
import UFSC from "../img/UFSC.png";
import UFPR from "../img/ufpr.png";
import LABENU from "../img/Labenu.png";
import BRA from "../img/bra.png";
import ESP from "../img/spn.png";
import EUA from "../img/usa.png";

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
                    <h1>Sobre mim</h1>
                    <hr />
                    <section id="cabecalho-sobre">
                        <img src={MeuIcone} alt="Meu Ícone"/>
                        <p> Eu sou <span>Gislaine Costa Pereira</span></p>
                        <section id="texto-sobre">
                            <p>Estudante de Web Full Stack Development<br/>
                                36 anos<br/>
                                Florianópolis/SC</p>
                            <a target="_blank" href="https://drive.google.com/file/d/16dlaJqqq48x2VuvkBrck-uJn4Tj8bl_8/view?usp=sharing">&nbsp;&nbsp;Acessar CV&nbsp;&nbsp;</a>
                        </section>
                    </section>

                    <h2>Minhas habilidades</h2>
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

                    <h2>Resumo</h2>
                    <hr />
                    <p id="texto-resumo">Engenheira Agrônoma e Mestre em Nutrição Animal, com experiência em nutrição de aves, estatística e 
                        experimentação, alimentos alternativos e criação de marrecos. <br /><br />
                        Atualmente migrando de área, sou estudante de Web Full Stack Developer na Labenu com grande afinidade por 
                        Front-end. Com conhecimentos de UX/UI e Marketing. Com os projetos práticos realizados no curso, 
                        obtive grande domínio de Interfaces, Java Script, ReactJS, HTML5, CSS e GitHub. Atualmente entrando no mundo 
                        de Back-end, estou aprendendo sobre Banco de Dados (MySQL). <br /><br />
                        Com um desejo inato de fazer as coisas de maneira certa, dou importância a fatos, lógica e sistemas. 
                        Analiso os sintomas, encontro as falhas e estudo formas para consertá-las. Sou capaz de trabalhar de modo 
                        constante, meticuloso e deliberado, possuindo a persistência necessária para acompanhar uma tarefa até sua 
                        conclusão. Costumo ser criativa, cooperativa, cautelosa, organizada, metódica e orientada à rotina do 
                        planejamento, mas com facilidade para desenvolvimento de relacionamento interpessoal e motivacional.
                    </p>

                    <h2>Formação</h2>
                    <hr />

                    <section id="educacao">
                        <img src={LABENU} alt="Labenu"/>
                        <img src={UFPR} alt="UFPR"/>
                        <img src={UFSC} alt="UFSC"/>
                        <p>Web Full Stack Development<br/>(Em andamento)</p>
                        <p>Mestrado em Ciências Veterinárias -<br/>Nutrição Animal</p>
                        <p>Agronomia</p>
                    </section>

                    <h2>Idiomas</h2>
                    <hr />

                    <section id="idiomas">
                        <img src={BRA} alt="Brasil" />
                        <img src={ESP} alt="Espanha" />
                        <img src={EUA} alt="EUA" />
                        <p>Nativo</p>
                        <p>Intermediário</p>
                        <p>Básico</p>
                    </section>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Sobre;
