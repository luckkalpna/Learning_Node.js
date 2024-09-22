// ------------Basic programm--------------

// console.log("Hello Server")

// var a = 10;
// var b = 20;
// var c = 30;
// console.log(a+b+c)

// --------------if else condition-------------

// var x = "20";
// if(x === 20){
//     console.log("Matched")
// }else{
//     console.log("Not Matched")
// }

//---------For Loop in nodejs-------------

// var x = 10;
// for(i=0;i<10;i++){
//     console.log(i)
// }

//---------Fetching data from another file-----------

// const app = require("./app")

// console.log(app)
// console.log(app.z())

//--------Create a new file from code----------

// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Hello I am new file data");

//----------Installing Nodemon-------------

// console.log("Nodemon Installed")



//----------------Getting Input from command line---------------

const fs = require("fs")

const input = process.argv
// fs.writeFileSync(input[2], input[3])

//----------For adding and removing file-----------

if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log("Invalid Input")
}
