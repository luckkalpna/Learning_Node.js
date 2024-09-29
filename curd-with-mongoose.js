const mongoose = require("mongoose");

// Define the ProductSchema outside the functions so it can be reused
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

// Create the model once and reuse it in all functions
const ProductsModel = mongoose.model("products", ProductSchema);

//----------Save Data in DB--------
const saveInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");

    let data = new ProductsModel({
        name: "m8",
        price: 100,
        brand: "vivo",
        category: "mobile"
    });
    let result = await data.save();
    console.log(result);
}

//----------Update Data in DB--------
const updateInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");

    let data = await ProductsModel.updateOne(
        { name: "m8" },
        { $set: { price: 500 } }
    );
    console.log(data);
}

updateInDB();

//---------Delete Data in DB-----------

const deleteInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");

    let data = await ProductsModel.deleteOne({ name: "m8" });
    console.log(data);
}

deleteInDB();