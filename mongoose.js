const mongoose = require("mongoose");

//----------Field validation--------

const main = async () => {
    // Correct the connection string by placing the port number after the host
    await mongoose.connect("mongodb://localhost:27017/e-comm");

    const ProductSchema = new mongoose.Schema({
        name: String,
        price:Number
    });

    //----------For type validation----------

    const ProductsModel = mongoose.model("products", ProductSchema);
    let data = new ProductsModel({ name: "m8", price:100 });
    let result = await data.save();
    console.log(result);
}

main();
