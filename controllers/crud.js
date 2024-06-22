const conexion = require('../database/db');

exports.read = (req,res) => {

    conexion.query ('SELECT*FROM users', (err, results) => {

        if(err){

            throw err;

        }else{

            res.render('index.ejs', {results:results});
        }
    });
}

exports.readUser = (req,res) => {

    const id = req.params.id;
    conexion.query('SELECT*FROM users WHERE id = ?',[id], (err,results) => {

        if(err){

            throw err;
        }else{

            res.render('edit.ejs',{user:results[0]});
        }

    })
}

exports.save = (req,res) => {

    const user = req.body.user;
    const rol = req.body.rol;

    conexion.query('INSERT INTO users SET ?',{ usuario: user, rol: rol}, (err,result) => {

        if (err) {
            console.log(err);
        }else{
            res.redirect('/')
        }
    })
}


exports.update = (req,res) => {

    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{usuario: user, rol: rol}, id], err => {

        if (err) {
            
            console.log(err);
        }else{

            res.redirect('/');
        }
    });
}

exports.delete = (req,res) => {

    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id], err => {

        if (err){

            console.log(err);

        }else {

            res.redirect('/');
        }
    })
}