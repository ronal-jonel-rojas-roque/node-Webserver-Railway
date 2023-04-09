const express = require('express')
const hbs = require('hbs'); //handlebars
require('dotenv').config();
const app = express()

const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');

//TODO: requiere hbs
app.set('view engine', 'hbs');

//SERVIR CONTENIDO ESTATICO MEDIANTE MIDELWERS
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Ronal Rojas',
        titulo: 'Curso Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Esto es una pagina generica',
        titulo: 'Generic page'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Esto es una pagina de elementos',
        titulo: 'Elements page'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/template/404.html');
})

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})