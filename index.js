const fs= require('fs');
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const HOST=5000;



fs.readFile('./data.json','utf8',(err,data)=>{
    if(err)
    console.log(err);
    let workers=JSON.parse(data);

    app.get('/workers',function(req,res){
        res.send(workers);
    })
})


app.listen(HOST,function(){
    console.log('localhost:'+HOST);
})


// fs.readFile('./data.json','utf8',(err,data)=>{
//     if(err){
//     console.log(err);
//     }
//     let parseWorkers=JSON.parse(data);
//     parseWorkers.sort((a,b)=>a.age-b.age);
//     let len = Math.floor(parseWorkers.length/2);
//     fs.writeFile('./result.txt',JSON.stringify(parseWorkers[len]),(err)=>{
//         if(err){
//             console.log(err);
//         }
//     })
// })
