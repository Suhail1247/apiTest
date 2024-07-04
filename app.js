import express from 'express';
import connect from './database/connect.js'
import router from './router/route.js';
import bodyParser from "body-parser"
const app=express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());



const port=8080


app.use('/api',router)

connect().then(()=>{
    try{
        app.listen(port,()=>{
            console.log('connected to the port');
        })
    }catch{
        console.log('cannot connect to the server')
    }
}).catch(err=>{
    console.log('invalid connection',err)
})

