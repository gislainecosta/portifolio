import React, { useState, useEffect } from "react";
import * as emailjs from 'emailjs-com';
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
    input: {
        '& > *': {
            backgroundColor:'none !important', 
            width: '50vw',
            color: 'white',
            marginBottom: '2%',
            borderRadius: '15px',
        },
    },
    inputGrande: {
        
        '& > *': {
            width: '50vw',
            color: 'white',
            marginBottom: '2%',
            minHeight: '15vw',
            borderRadius: '15px',
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

    const enviarEmail = (e) =>{
    e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('gmail', 'form-contact-portifolio', e.target, 'user_TgNV2PcOnHbdlgOnfKrfL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="tela-toda">
                <Menu paginaAtual={'CONTATO'} />
                <section className='conteudo-principal'>
                    <p id="texto-contato">Entre em contato</p>
                    <form className={classes.root} autoComplete="off" onSubmit={enviarEmail}>                        
                        <input className="input-teste" placeholder="E-mail" type="email"/>
                        <br />
                        <Input 
                            autocomplete='off'
                            className={classes.input}
                            color='primary.light'
                            required
                            label="Nome"
                            variant="outlined"
                            name="autor"
                        />
                        <Input className={classes.input} color='primary.light' required type='email' label="E-mail" variant="outlined" name="contato"/>
                        <Input className={classes.input} color='primary.light' required type='text' label="Assunto" variant="outlined" name="assunto"/>
                        <Input className={classes.inputGrande} color='primary.light' required type='text' multiline label="Mensagem" variant="outlined" name="mensagem" />
                        <br />
                        <input id="botao-enviar" type="submit" value="Enviar" />
                    </form>
                </section>
            </div>
        </ThemeProvider>
    );
};

export default Contato;
