const mongoose = require("mongoose");

const errorSchema = new mongoose.Schema({
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
        required: true,
    },
    row: {
        type: Number,
        required: true,
    },
    column: {
        type: String,
        required: true,
    },
    expectedType: {
        type: String,
        required: true,
    },
    actualType: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});

const ErrorLogModel = mongoose.model("ErrorLog", errorSchema);

module.exports = ErrorLogModel;
