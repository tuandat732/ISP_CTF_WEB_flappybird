const express = require('express');
var bodyParser = require('body-parser');
var cors=require('cors')
var path = require('path')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname,'img')))
app.use(express.static(path.join(__dirname,'audio')))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/str/spt",(req,res)=>{
    res.json({
        formFlag:"ISPCLUB{}",
        str:"ISPCLUB{Fl4ppy_b1rd_1s_funny_0r_3azy<3}"
    })
})

app.get('/',(req,res)=>{
    // res.cookie("flappyTroll","fun");
    // res.cookie("trollx2",'hanh_7_mon');
    // res.cookie("not_troll","troll");
    // res.cookie("-.-",'localStorage not all')
    res.sendFile(__dirname+'/index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))