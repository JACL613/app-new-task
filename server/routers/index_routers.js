const {Router} = require('express');
const path = require('path');
const multer = require('multer');
const router = Router();
const product  = require('../../DataBases/models/schema.js');
const  databases = require('../../DataBases/conexion_db.js');

// Reglas de middelware
const storage = multer.diskStorage({
    destination: path.join(__dirname , '../../App/uploads'),
    filename:(req , file , cb) => {
        cb(null, file.originalname);
    }
});

const subir = multer({
    storage,
    dest: path.join(__dirname , '../../App/uploads')
}).single('input_imagen');

// rutaas
router.get('/' , async(req,res) =>{
    let items = await databases.Query();
    console.log(items);
    res.send(items);
});
router.get('/add' , async (req , res) => {
    let users = await databases.Query();
    console.log( users , 'Desde una funcion');
     const user1 = users[0];
     const user2 = users[1];

    res.send(`
    
        <table border="1px">
        <tr>
            <td>name</td>
            <td>edad</td>
            <td>password</td>
        </tr>
        <tr>
        <td>${user1.name}</td>
        <td>${user1.age}</td>
        <td>${user1.password}</td>
        </tr>
        <tr>
        <td>${user2.name}</td>
        <td>${user2.age}</td>
        <td>${user2.password}</td>
        </tr>
        </table>
    `);

    console.log('Peticion Recibida');


});

router.post('/upload', subir, async(req,res) =>{
    const ruta = path.join('./uploads/', req.file.originalname);
    const marca = req.body.input_marca;
    const precio = req.body.input_precio;
    let subida = databases.Upload(ruta,marca,precio);
    console.log(ruta ,req.body);
    const datos = JSON.stringify(req.file);
    res.send(`<h1>file upload</h1> <br/> <h2> <img src=${ruta} /> datos:</h2>${datos}  <br/> <h3> Productos agregados: ${marca} <br/> ${precio}</h3> `);
});
module.exports = router;