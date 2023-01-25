import express from 'express';
const app = express()
import cors from 'cors'
import Connection from './database/db.js'
import Route from './Router/routes.js'
import DefaultData from './default.js';
app.use(cors())
app.use(express.urlencoded({ extended : true}))
app.use(express.json())
app.use('/',Route) 
import dotenv from 'dotenv'
const port = process.env.PORT || 80;
dotenv.config()

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-grjsyfq-shard-00-00.dmncauj.mongodb.net:27017,ac-grjsyfq-shard-00-01.dmncauj.mongodb.net:27017,ac-grjsyfq-shard-00-02.dmncauj.mongodb.net:27017/?ssl=true&replicaSet=atlas-xa5tl9-shard-0&authSource=admin&retryWrites=true&w=majority`


Connection(URL);

app.listen(port,()=>{console.log(`server is listining on port ${port}`);})

DefaultData()