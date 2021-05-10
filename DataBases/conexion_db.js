const Product  = require('./models/schema.js');
const mongoose = require('mongoose');


// datos

const user = 'jacl13';
const password = 'HolaMundo126';
const db = 'webstore'
const uri = `mongodb+srv://${user}:${password}@cluster0.k0xh7.mongodb.net/${db}?retryWrites=true&w=majority`;
let Usuarios = '';
mongoose.connect('mongodb://localhost:27017/webstore', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Data Bases activiti'))
    .catch((e) => console.log('Error Al Conectar la DB'));

async function Query (){
    const users = await Product.find();
    var usuarios = users;
    return usuarios; 
};
async function Upload (value1,value2,value3){
    const products = await Product.insertMany({ruta:value1 , marca:value2 , precio:value3});
    let producto = products;
    return producto;

};
  

module.exports = {Query , Upload};