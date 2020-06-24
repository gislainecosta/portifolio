import React, { useState, useEffect } from "react";
import "./Pages.css";
import { createMuiTheme, ThemeProvider, withTheme } from "@material-ui/core/styles";
import Menu from './../components/Menu';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/SendRounded';

const Input = withStyles({
    root: {
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#99a0b7',
            },
            '&:hover fieldset': {
                borderColor: '#037fff',
            },
            '& > *': {
                color: '#fff',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '5%',
    },
    extendedIcon: {
        marginLeft: theme.spacing(2),
        fontSize: '2.5vw'
    },
    botao:{
        width: '15vw',
        margin: '3% 0 0 45%',
        fontSize: '1.5vw',
    },
    input: {
        '& > *': {
            width: '50vw',
            color: 'white',
            marginBottom: '2%',
        },
    },
    inputGrande: {
        '& > *': {
            width: '50vw',
            color: 'white',
            marginBottom: '2%',
            minHeight: '15vw',
        },
    },

}));

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            light: "#037fff",
            contrastText: "#fff",
            main: "#99a0b7",
            dark: '#10121b'
        },
        secondary: {
            main: "#037fff",
            contrastText: "#fff",
            light: "#99a0b7",
            dark: '#084a8d'
        },
    },
});


const Contato = () => {
    const classes = useStyles(); 

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'CONTATO'} />
                <section className='conteudo-principal'>
                    <p id="texto-contato">Entre em contato</p>
                    <form className={classes.root} autoComplete="off">
                        <Input className={classes.input} color='primary.light' required type='email' label="Nome" variant="outlined" />
                        <Input className={classes.input} color='primary.light' required type='text' label="E-mail" variant="outlined" />
                        <Input className={classes.input} color='primary.light' required type='text' label="Assunto" variant="outlined" />
                        <Input className={classes.inputGrande} color='primary.light' required type='text' multiline label="Mensagem" variant="outlined" />
                        <br />
                        <Fab className={classes.botao} onClick={() =>{console.log('funciona')}} color="secondary" variant="extended">
                            Enviar
                            <SendIcon className={classes.extendedIcon} />
                        </Fab>
                    </form>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Contato;
