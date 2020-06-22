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


const Home = () => {
    const [pagina, setPagina] = useState()
    
    useEffect(() => {
        let urlAtual = window.location.href;
        setPagina(urlAtual)
    })


    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={pagina}/>
                <section className='conteudo-principal'>
                    <p>Oi, eu sou o Home</p>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Home;
