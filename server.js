const express = require('express');
var bodyParser = require('body-parser');
var cors=require('cors')
var cookieParser = require('cookie-parser');
var path = require('path')

const app = express()
const port = process.env.PORT || 3000;

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname,'img')))
app.use(express.static(path.join(__dirname,'audio')))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/getSomething",(req,res)=>{
    res.json({
        formFlag:"ISPCLUB{}",
        str:"ahihi chào cậu"
    })
})

app.post("/getSomething",(req,res)=>{
    let user = req.body;
    if(parseInt(user.value)  >=100 ) {
        res.json({
            str:"ISPCLUB{Fl4ppy_B1rd_15_n0t_funny}"
        })
    }else{
        res.json({
            str:"con chim ngu:>"
        })
    }
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))