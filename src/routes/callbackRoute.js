const express = require("express");

const callbackRouter = express.Router();
const callbackRoute = "/callback";

callbackRouter.post("/", (req, res) => {
    console.log("Mensaje recibido:\n", req.body);
    res.status(200).end();
});

module.exports = { callbackRoute, callbackRouter };
