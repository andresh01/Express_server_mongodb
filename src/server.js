
//mongodb
require("dotenv").config();
const { mongoose } = require("mongoose");
const sequelize = require('./utils/postgresql')
const express = require("express");

//const { errors, errorHandler, errorPath } = require("./middlewares/error.handler");
const { error } = require('./middlewares')
const { User } = require('./routes')
const { Product } = require('./routes')

const PORT = process.env.PORT;

const app = express();


app.use(express.json());
app.use("/", Product);
app.use("/", User);
app.use(error.errors);
app.use(error.errorHandler);
app.use(error.errorPath);


const start = async () => {
   try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      
    //await sequelize.sync();

    app.listen(PORT, () => {
        //console.clear();
        console.log(`SERVER LISTENING ON PORT ${PORT}`)
    });
   } catch (error) {
    console.error(error);
    process.exit(1); //codigo de error diferente de 0
   }
   
}

start();

