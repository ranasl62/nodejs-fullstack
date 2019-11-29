/*const http = require('http');
const route = require('./routes');


const server = http.createServer(route);
server.listen(3000,'localhost',()=>{
    console.log(`Server listen at localhost:3000`);
    
});*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require('path');
const rootDir = require('./util/path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));


app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});
app.listen(3000);