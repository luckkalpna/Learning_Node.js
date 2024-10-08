// const express = require("express");
// const app = express();

// app.get("", (req, res)=>{
//     res.send("Hello Server I am Home Page")
// });

// app.get("/about", (req, res)=>{
//     res.send("Hello Server I am About page")
// });

// app.get("/help", (req, res)=>{
//     res.send("Hello Server I am Help page")
// });


// app.listen(5000)

//-----------Make a simple HTML page------------

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

//------------Using EJS----------
app.set("view engine", "ejs");

app.get("/profile", (req, res)=>{
    const user = {
        name: "John Deo",
        email: "abc@gmail.com",
        skills: ['php', 'java', 'js', 'node', 'c++']
    }
    res.render("profile", {user})
})

app.get("/login", (req, res)=>{
    res.render("login")
})

// app.use(express.static(publicPath));

app.get("", (req, res)=>{
    res.sendFile(`${publicPath}/index.html`)
});

app.get("/about", (req, res)=>{
    res.sendFile(`${publicPath}/about.html`)
});

app.get("/help", (req, res)=>{
    res.sendFile(`${publicPath}/help.html`)
});

//-----------404 page---------

app.get("*", (req, res)=>{
    res.sendFile(`${publicPath}/pagenotfound.html`)
})

app.listen(5000);
