const express = require("express");
const { getErrors } = require("../services/errorLogService");

const errorRoute = "/errors";
const errorRouter = express.Router();

// Ruta para obtener los errores por taskId
errorRouter.get("/:taskId", async (req, res) => {
    const taskId = req.params.taskId;

    try {
        const errors = await getErrors(taskId);

        res.json({
            message: "Errores obtenidos correctamente.",
            errors,
        });
    } catch (error) {
        console.error("Error al obtener los errores:", error.message);
        res.status(500).json({
            message: "Error al obtener los errores.",
            error: error.message,
        });
    }
});

module.exports = { errorRoute, errorRouter };
