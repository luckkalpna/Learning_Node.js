const dbConnect = require("./mongodb");

//----------With the help of promisses----------

// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

//-------------In a specific function-----------

const main = async () =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
}

main();

// console.log(dbConnect());
