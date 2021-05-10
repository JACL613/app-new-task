const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ruta: String , 
    marca : String ,
    precio: Number 


});

const product = mongoose.model('productos', ProductSchema);

module.exports = product;

// 018000910063