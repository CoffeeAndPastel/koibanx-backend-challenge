const { TaskModel } = require("../models");

async function createTask(callbackUrl) {
    try {
        const task = new TaskModel({ callbackUrl });
        await task.save();
        return task._id;
    } catch (error) {
        throw new Error("Error al crear la tarea");
    }
}

module.exports = {
    createTask,
};
