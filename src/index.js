
//mongodb
require("dotenv").config();
const { mongoose } = require("mongoose");

const express = require("express");

const { errors, errorHandler } = require("./middlewares/error.handler");

const PORT = process.env.PORT;

const app = express();


app.use(express.json());
app.use("/", require("./routes/products.route"));
app.use(errors);
app.use(errorHandler);


const start = async () => {
   try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    app.listen(PORT, () => {
        console.clear();
        console.log(`SERVER LISTENING ON PORT ${PORT}`)
    });
   } catch (error) {
    console.error(error);
    process.exit(1); //codigo de error diferente de 0
   }
   
}

start();
