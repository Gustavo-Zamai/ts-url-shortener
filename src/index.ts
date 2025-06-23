import express from 'express';
import { URLController } from './controller/url-connection';
import { MongoConnection } from './database/mongo-connection';

const api = express();
api.use(express.json());

const database = new MongoConnection()
database.connect();

const urlController = new URLController();
api.post('/shortener', urlController.shortener);
api.get('/:hash', urlController.redirect);

api.listen(3000, () => console.log('Express running!')); 