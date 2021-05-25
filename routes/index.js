const routes = require('express').Router();
//const admin = require('./admin');
const auth = require('./auth');
const shop = require('./shop');
const admin = require('./admin');

routes
    .use('/shop',shop)
    .use('/auth',auth)
    .use('/admin',admin)
    //.use('/proveActivities',proveActivities)
    .get('/',(req,res,next)=>{
        res.render('pages/index',{title: 'E-commerce App',path:'/'});
    })
    .use((req,res,next)=>{
        res.render('pages/404',{title: '404 - Page Not Found',path:req.url});
    })

module.exports=routes;