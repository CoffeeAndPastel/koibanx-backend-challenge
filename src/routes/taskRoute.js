const express = require("express");
const { getTask } = require("../services/taskService");

const taskRoute = "/tasks";
const taskRouter = express.Router();
const { errorRoute, errorRouter } = require("./errorLogRoute");

taskRouter.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const task = await getTask(id);

        res.json({
            message: "Tarea obtenida correctamente.",
            task,
        });
    } catch (error) {
        console.error("Error al obtener la tarea:", error.message);
        res.status(500).json({
            message: "Error al obtener la tarea",
            error: error.message,
        });
    }
});

taskRouter.use(errorRoute, errorRouter);

module.exports = { taskRoute, taskRouter };
