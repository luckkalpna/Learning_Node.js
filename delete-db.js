const dbConnect = require("./mongodb");

const deleteData = async () =>{
    let data = await dbConnect()
    let result = await data.deleteOne({name:"m 9"});
    console.log(result)
}

deleteData();