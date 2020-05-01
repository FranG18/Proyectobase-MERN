import express from 'express';
import multipart from 'connect-multiparty';
import Controller from '../controllers/controller';

const router=express.Router();
const multipartMiddleware=multipart({uploadDir:'./uploads'});

router.get('/test',Controller.test);
router.post('/user',Controller.createUser);
router.get('/user/:_id',Controller.getUser);

export default router;