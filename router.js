const express = require('express');
const router = express.Router();
const crud = require('./controllers/crud.js');

const consultaEsp = 'SELECT*FROM users WHERE id = ?';


router.get('/', crud.read);

router.get('/create', (req,res) => {

    res.render('create.ejs');
});
router.post('/save', crud.save);
router.get('/edit/:id', crud.readUser);
router.get('/delete/:id', crud.delete)
router.post('/update', crud.update);

module.exports = router;