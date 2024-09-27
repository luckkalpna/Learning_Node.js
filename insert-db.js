const dbConnect = require("./mongodb");

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne( // Use insertOne for inserting a single document
        {
            name: "note 9",
            brand: "vivo",
            price: 320,
            category: "mobile"
        }
    );
    if (result.acknowledged) {  // `acknowledged` is the correct property
        console.log("data inserted");
    } else {
        console.log("Error");
    }
}

insert();
