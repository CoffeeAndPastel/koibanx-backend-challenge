const mongoose = require("mongoose");

const url = `mongodb://localhost:27017/`;

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conexión a la base de datos establecida");
    });

module.exports = { mongoose };
