const express = require("express");
const app = express();

app.get("", (req, res)=>{
    res.send("Hello Server I am Home Page")
});

app.get("/about", (req, res)=>{
    res.send("Hello Server I am About page")
});

app.get("/help", (req, res)=>{
    res.send("Hello Server I am Help page")
});


app.listen(5000)