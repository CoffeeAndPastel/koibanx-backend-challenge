const axios = require("axios");
const { TaskModel } = require("../models");

async function getTask(id) {
    try {
        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }

        return {
            state: task.state,
            countErrors: task.countErrors,
            callbackUrl: task.callbackUrl,
        };
    } catch (error) {
        throw new Error("Error al buscar la tarea");
    }
}

async function createTask(callbackUrl) {
    try {
        const task = new TaskModel({ callbackUrl });
        await task.save();
        return task._id;
    } catch (error) {
        throw new Error("Error al crear la tarea");
    }
}

async function updateTask(taskId, taskUpdate) {
    try {
        const task = await TaskModel.findById(taskId);

        if (!task) {
            throw new Error("No se encontró la tarea");
        }

        if (taskUpdate && taskUpdate.state) {
            task.state = taskUpdate.state;
        }

        if (taskUpdate && taskUpdate.countErrors !== undefined) {
            task.countErrors += taskUpdate.countErrors;
        }

        task.save();

        notifyCallback(task);

        return task;
    } catch (error) {
        throw new Error("No se pudo actualizar la tarea");
    }
}

async function notifyCallback(task) {
    const { callbackUrl, _id: taskId, state, countErrors } = task;

    try {
        await axios.post(callbackUrl, {
            taskId,
            state,
            countErrors,
        });
    } catch (error) {
        console.error(
            "Error al enviar la notificación al callback:",
            error.message
        );
    }
}

module.exports = {
    getTask,
    createTask,
    updateTask,
};
