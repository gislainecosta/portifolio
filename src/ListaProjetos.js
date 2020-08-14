import Delicias from './img/Delicias.jpg';
import PowerOn from './img/PowerOn.jpg';
import F4 from './img/f4.png';
import Labenux from "./img/labenux.png"

export const listaProjetos = [
    {
        id: 1,
        nome: "LabenuX",
        foto: Labenux,
        isSite: true,
        contribuicao: "Criação do site e edição de imagens",
        link: "http://labenux-gislaine.surge.sh",
        github: "https://github.com/gislainecosta/labenux",
        descricao:"Projeto semanal do curso que consistia em criar um site que vende viagens espaciais.",
        tipo: "front",
        tela: "note",
        imagens: []
    },
    {
        id: 10,
        nome: "F4 Bank",
        foto: F4,
        isSite: true,
        contribuicao: "Criacao da Landing page e imagens",
        link: "",
        github: "https://github.com/future4code/julian-f4bank",
        descricao: "Projeto Semanal feito em conjunto com masi 2 colegas de curso. Consistia em criar uma landing page de um banco. Foi fornecido o Logotipo. ",
        tipo: "front",
        tela: "note",
        imagens: []
    },
    {
        id: 20,
        nome: "Delícias da Tia Gi",
        foto: Delicias,
        isSite: false,
        contribuicao: "Criação de toda a Identidade visual",
        link: "https://www.facebook.com/tiagideixaseupetfeliz",
        github: "",
        descricao: "Delicias da tia Gi produz petiscos caseiros para cães e gatos. Neste projeto criei toda a identidade visual, incluindo logo, cartão de visitas, banner promocional, etiquetas e plaquinha de mesa.",
        tipo: "mkt",
        imagens: []
    },
    {
        id: 21,
        nome: "Power On Informática",
        foto: PowerOn,
        isSite: false,
        contribuicao: "Criação do Logo e Cartão de visitas",
        link: "https://www.facebook.com/Power-On-Inform%C3%A1tica-104288697993038",
        github: "",
        descricao: "Serviço de montagem e manutenção de computadores. Neste projeto criei a logo e o cartão de visitas",
        tipo: "mkt",
        imagens: []
    },
]