const express = require("express");
const multer = require("multer");
const { createTask } = require("../services/taskService");
const { processFileInBlocks } = require("../services/uploadService");

const upload = multer({ dest: "uploads/" });

const uploadRouter = express.Router();
const uploadRoute = "/upload";

uploadRouter.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        const { mapping, callbackUrl } = req.body;
        const mappingObj = JSON.parse(mapping);

        const task = await createTask(callbackUrl);
        const taskId = task._id;

        await processFileInBlocks(taskId, file, mappingObj);

        res.json({
            message: "Archivo cargado correctamente.",
            taskId,
        });
    } catch (error) {
        console.error("Error al cargar el archivo:", error);
        res.status(500).json({
            message: "Error al cargar el archivo",
            error: error.message,
        });
    }
});

module.exports = { uploadRoute, uploadRouter };
