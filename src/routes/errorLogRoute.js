const express = require("express");

const errorRoute = "/errors";
const errorRouter = express.Router();

errorRouter.get("/", (req, res) => {
    res.send(`Ruta ${errorRoute} funciona`);
});

module.exports = { errorRoute, errorRouter };
