const { TaskModel, ErrorLogModel } = require("../models");

async function getErrors(taskId) {
    try {
        const taskExists = await TaskModel.exists({ _id: taskId });

        if (!taskExists) {
            throw new Error("Tarea no encontrada.");
        }

        const errors = await ErrorLogModel.find({ taskId });

        const formattedErrors = errors.map((error) => {
            const { row, column, expectedType, actualType, value } = error;
            return { row, column, expectedType, actualType, value };
        });

        return formattedErrors;
    } catch (error) {
        throw new Error("Error al buscar los errores");
    }
}

async function createErrors(errors) {
    try {
        await ErrorLogModel.insertMany(errors);
    } catch (error) {
        throw new Error("Error al crear los errores.");
    }
}

module.exports = { getErrors, createErrors };
