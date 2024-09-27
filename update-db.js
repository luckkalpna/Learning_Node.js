const dbConnect = require("./mongodb")

const updateData = async () =>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: "u 10"}, {
            $set: {name: "y 10"}
        }
    );
    console.log(result)
}

updateData();