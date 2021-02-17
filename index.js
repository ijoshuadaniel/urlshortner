const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const CONNECTURI = 'mongodb+srv://daniel:1234567890@cluster0.1z9xs.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(CONNECTURI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("DB Connected");
})


const schema  = mongoose.Schema({
url:String,
param:String
});

const shortUrl = mongoose.model('Urls',schema);


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
            error:"Failed ! Please Check all Feilds"
        })
    }else{

    const newUrl = new shortUrl({
        url,
        param
    })

    newUrl.save().then(()=>{
        return res.json({
            success:"added to database"
        });
    }).catch((err)=>{
        return res.json({
            error:"Failed",
            errormsg:err
        });
    })

  
}
});



app.get('/get',(req,res)=>{
shortUrl.find().then((response) => {
    res.json({
        response
    })
}).catch((err) =>{
    res.json({
        error:err.msg
    })
})
})








app.listen(80);