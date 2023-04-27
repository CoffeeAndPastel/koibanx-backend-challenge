const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    state: {
        type: String,
        enum: ["pending", "processing", "done"],
        default: "pending",
    },
    count_errors: {
        type: Number,
        default: 0,
    },
    callbackUrl: {
        type: String,
        default: "http://localhost:3000/callback",
    },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
