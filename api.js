const express = require("express");
const dbConnect = require("./mongodb")
const app = express();

app.use(express.json());   // for post an data

//--------GET Method----------

app.get("/", async (req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    res.send(data)
});


//--------POST Method----------

app.post("/", async (req, res)=>{
    let db = await dbConnect.apply();
    let result = await db.insertOne(req.body);
    res.send(result);  // for original post data
    // res.send({name:"your name"});  // for demo data
});

//---------PUT Method---------

app.put("/", async (req, res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:"jay"},
        { $set:{age:27}}
    )
    res.send({result:"update"})
})

app.listen(5000)