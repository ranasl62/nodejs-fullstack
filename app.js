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

const expressHbs = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.set('title', 'Nodejs-fullstack');
/**
 * for view directory and templating engine
 */
app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');
// app.set('views', 'views');

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.render('404', { layout: false, pageTitle: 'Page Not Found' });
});


// app.use((req, res, next) => {
//     res.sendFile(path.join(rootDir, 'views', '404.html'));
// });
app.listen(3000);