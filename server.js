const express = require('express');
const mysql = require('mysql2');

const app = express();
const mysql_config = require('/mysql_config');

const funtions = require ('./functions');

app.listen(3000,()=>{
    console.log('servidor no ar ')
    console.log('oi')
})

const connection = mysql.createConnection(mysql_config);


app.get('/', (req,res)=>{
    connection.query('SELECT * FROM tasks', (err, results)=>{
        if(err){
            res.json(funtions.response('casa caiu', "Erro:"+err.message))
        }else{
            res.json(funtions.response('tamo pampa ', 'tasks listdos com sucesso', results))
        }
    })
})

