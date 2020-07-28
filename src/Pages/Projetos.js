import React, { useState, useEffect } from "react";
import "./Pages.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from './../components/Menu';
import { listaProjetos } from '../ListaProjetos';

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
    const [projetos, setProjetos] = useState([])

    useEffect(() =>{
        setProjetos(listaProjetos)
    }, [listaProjetos])
    
    console.log(projetos)

    const listagemProjetos = projetos.map((projeto)=>{
        return <section key={projeto.id} className="projeto">
            <img className="foto-projeto-principal" src={projeto.foto} alt="Foto do Projeto" />
            <section className="texto-projetos">
                <p><b><i>{projeto.nome}</i></b></p>
                <p>{projeto.contribuicao}</p>
                <button onClick={()=>{console.log("funcionou botão")}}>Saiba Mais</button>
            </section>
        </section>
    })

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'PROJETOS'}/>
                <section className='conteudo-principal'>
                    <p className="titulo-paginas" >Meus projetos</p>
                    <section id="grid-projetos">
                        {listagemProjetos}
                    </section>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Projeto;
