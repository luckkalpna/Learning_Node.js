const express = require("express");
const app = express();

//------------Middleware----------

const reqFilter=(req, res, next)=>{
    if(!req.query.age){
        res.send("Please provide your age")
    }
    else if(req.query.age<18){
        res.send("You can not access this page")
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get("/", (req, res)=>{
    res.send("Welcome to our home page")
});

app.get("/user", (req, res)=>{
    res.send("Welcome to our user page")
})

app.listen(5000);