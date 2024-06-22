const express = require('express');
const app = express();
const puerto = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(puerto, (err) => {

    if(err){

        console.error('Error al conectar el host',err);
        return; 

    }else {

        console.log(`Servidor corriendo http://localhost:${puerto}`);

    }
});

// app.get('/', (req,res) => {

//     res.send('hola');
    
// })



