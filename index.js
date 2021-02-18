const express = require('express');
const cors = require('cors');
const { createPool } = require('mysql')

const pool = createPool({
    host:"localhost",
    database:"test",
    user:"root",
    password:"",
    connectionLimit:10
})

const app = express();
app.use(express.json()); 
app.use(cors());


app.get('/',(req,res)=>{
    res.send('working');
});


app.post('/add',(req,res)=>{
    const {url , param} = req.body;
    if(url === '' || param === ''){
        return res.json({
            status:"Failed ! Please Check all Feilds",
            errormsg:err.message
        })
    }else{
    pool.query("INSERT INTO `url`(`url`, `param`) VALUES (?,?)",[url,param],(err,results,fields) => {
        if(err) return res.json({
            status:"Failed",
            errormsg:err.message
        });
        res.json({
            status:"Success",
            data:results
        })
    })
  
}
});



app.post('/get',(req,res)=>{
const { param } = req.body;

if(param == ''){
    return res.json({
        status:"Failed",
        errormsg:"Please specify param value"
    });
}else{
    pool.query(" SELECT `url`,`param` FROM `url` WHERE `param` = ? ",[param],(err,results,fields) => {
        if(err) return res.json({
            status:"Failed",
            errormsg:err.message
        });
        res.json({
            status:"Success",
            data:results
        })
    })
}

})








app.listen(90);