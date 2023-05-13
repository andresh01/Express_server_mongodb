const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    //id: {type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: false },
    availableUnits: { type: Number, required: false, default: 0 },
    price: { type: Number, required: true },
    category: { type: String, required: true },

},
    { versionKey: false } //no muestra el _v en la base de datos mongoDB
)

exports.Product = mongoose.model("products", ProductSchema);
