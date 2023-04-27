const express = require("express");
const multer = require("multer");
const { createTask } = require("../services/taskService");

const upload = multer({ dest: "uploads/" });

const uploadRouter = express.Router();
const uploadRoute = "/upload";

uploadRouter.post("/", upload.single("file"), async (req, res) => {
    const file = req.file;
    const { mapping, callbackUrl } = req.body;
    const mappingObj = JSON.parse(mapping);

    try {
        const task = await createTask(callbackUrl);
        const taskId = task._id;

        // Validar el archivo en bloques

        res.json({
            message: "Archivo subido.",
            taskId,
        });
    } catch (error) {
        console.error("Error al cargar el archivo:", error);
        res.status(500).json({ error: "Error al cargar el archivo" });
    }
});

module.exports = { uploadRoute, uploadRouter };
