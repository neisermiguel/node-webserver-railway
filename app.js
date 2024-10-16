require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
 const jsonConfigTitles = {
    nombre: 'Web Server',
    titulo: 'Curso de node'
}

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Servir contenido estatico
app.use(express.static('public'))
app.get('/', function (req, res) {
    res.render('home',jsonConfigTitles);
})
app.get('/generic', function (req, res) {
    res.render('generic',jsonConfigTitles);
})
app.get('/elements', function (req, res) {
    res.render('elements', jsonConfigTitles);
})
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

