const xlsx = require("xlsx");
const { createErrors } = require("./errorLogService");
const { updateTask } = require("./taskService");

async function processBlock(taskId, block, mappingObj) {
    const errors = [];

    for (let i = 0; i < block.length; i++) {
        for (const { name, type } of Object.values(mappingObj)) {
            const cellValue = block[i][name];

            if (typeof cellValue !== type) {
                const error = {
                    taskId,
                    row: i + 2,
                    column: name,
                    expectedType: type,
                    actualType: typeof cellValue,
                    value: cellValue,
                };

                errors.push(error);
            }
        }
    }

    await createErrors(errors);
    await updateTask(taskId, { countErrors: errors.length });
}

function validateFile(file, mapping) {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const dataKeys = Object.keys(data[0]);
    const mapKeys = Object.keys(mapping);

    return (
        dataKeys.every((key) => mapKeys.includes(key)) &&
        mapKeys.every((key) => dataKeys.includes(key))
    );
}

async function processFileInBlocks(taskId, file, mapping, blockSize = 1000) {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const blocks = [];
    for (let i = 0; i < data.length; i += blockSize) {
        blocks.push(data.slice(i, i + blockSize));
    }

    for (const block of blocks) {
        await processBlock(taskId, block, mapping);
    }

    await updateTask(taskId, { state: "done" });
}

module.exports = { validateFile, processFileInBlocks };
