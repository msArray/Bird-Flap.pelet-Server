require('dotenv').config();
const e = require("express");
const g = e();
this.c = [];
g.use(e.static('docs'));
g.get("/get",(q,s)=>{
    s.status(200);
    s.send({
        message:"Success",
        network:true
    })
})
g.post("/post",(q,s)=>{
    s.status(200);
    console.log(q);
})
g.listen(process.env.PORT,()=>{
    console.log(process.env.PORT);
})