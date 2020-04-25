const express=require('express');
const router=express.Router();
const Controller=require('../controllers/controller');
const multipart=require('connect-multiparty');
const multipartMiddleware=multipart({uploadDir:'./uploads'});

router.get('/test',Controller.test);

module.exports=router;