const mysql = require('mysql');
conexion = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_node'

});

conexion.connect(err => {

    if(err){

        console.error(`Error al conectarse con la bd, ${err}`);
        return;

    }else {

        console.log('Conexion exitosa');

    }
});

module.exports = conexion;