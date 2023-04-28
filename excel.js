const xlsx = require("xlsx");

function generateRandomError() {
  const randomValue = Math.random();
  if (randomValue < 0.1) {
    // Error de tipo: columna "id" debe ser un número
    return { id: "Error", name: "John Doe" };
  } else if (randomValue < 0.2) {
    // Error de tipo: columna "name" debe ser una cadena
    return { id: 1, name: 12345 };
  } else {
    // Sin error
    return { id: 1, name: "John Doe" };
  }
}

function generateExcelFileWithErrors() {
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet([]);

  for (let i = 0; i < 20000; i++) {
    const rowData = generateRandomError();
    xlsx.utils.sheet_add_json(worksheet, [rowData], { origin: -1 });
  }

  xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  const excelFilePath = "errors.xlsx";
  xlsx.writeFile(workbook, excelFilePath);
  console.log(`Archivo de Excel generado con errores: ${excelFilePath}`);
}

generateExcelFileWithErrors();
