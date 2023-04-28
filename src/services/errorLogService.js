const { TaskModel, ErrorLogModel } = require("../models");

async function getErrors({ taskId, page, pageSize }) {
    try {
        const taskExists = await TaskModel.exists({ _id: taskId });

        if (!taskExists) {
            throw new Error("Tarea no encontrada.");
        }

        const totalErrors = await ErrorLogModel.countDocuments({ taskId });
        const totalPages = Math.ceil(totalErrors / pageSize);
        const skip = (page - 1) * pageSize;
        const errors = await ErrorLogModel.find({ taskId })
            .skip(skip)
            .limit(pageSize);

        const formattedErrors = errors.map((error) => {
            const { row, column, expectedType, actualType, value } = error;
            return { row, column, expectedType, actualType, value };
        });

        return {
            currentPage: page,
            totalPages,
            errors: formattedErrors,
        };
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
