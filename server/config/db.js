const mongoose = require("mongoose");
require("dotenv").config();

const conectarDb = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("Funciona");
    } catch (error) {
        console.error(error);
    }
}

module.exports = conectarDb;