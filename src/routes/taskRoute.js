const express = require("express");

const taskRoute = "/tasks";
const taskRouter = express.Router();

taskRouter.get("/", (req, res) => {
    res.send(`Ruta ${taskRoute} funciona`);
});

module.exports = { taskRoute, taskRouter };
