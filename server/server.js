const path = require('path');
const express = require('express');
const app = express();

// config
app.set('port', process.env.PORT || 8080);
// router
app.use(require(path.join(__dirname ,'/routers/index_routers.js')));
// static page
app.use(express.static(path.join(__dirname , '../App' )));
// start server
const server = app.listen(app.get('port'), () =>{
    console.log('Server Activiti' , app.get('port'));
});
