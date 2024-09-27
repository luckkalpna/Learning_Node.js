const {MongoClient} = require("mongodb");
const url = "mongodb://localhost/27017";
const client = new MongoClient(url);
const database = "e-comm";

// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection("products");
//     let response = await collection.find({}).toArray();
//     console.log(response)
// }

// getData();

//----------Diffrent method-----------

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("products");
    // let response = await collection.find({}).toArray();
    // console.log(response)
}

//----------With the help of promisses----------

dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.log(data)
    })
})

// console.log(dbConnect());
