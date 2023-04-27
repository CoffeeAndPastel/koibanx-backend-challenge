const express = require("express");

const uploadRoute = "/upload";
const uploadRouter = express.Router();

uploadRouter.get("/", (req, res) => {
    res.send(`Ruta ${uploadRoute} funciona`);
});

module.exports = { uploadRoute, uploadRouter };
