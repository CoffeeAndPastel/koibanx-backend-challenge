const express = require("express");
const { getErrors } = require("../services/errorLogService");

const errorRoute = "/errors";
const errorRouter = express.Router();

errorRouter.get("/:taskId", async (req, res) => {
    const taskId = req.params.taskId;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    try {
        const { currentPage, totalPages, errors } = await getErrors({
            taskId,
            page,
            pageSize,
        });

        res.json({
            message: "Errores obtenidos correctamente.",
            currentPage,
            totalPages,
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
