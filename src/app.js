const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    const apiInfo = {
        name: "Servicio de Carga de Excels - Reto de backend",
        description: "Un servicio para cargar y validar archivos Excel",
        endpoints: [
            {
                url: "/upload",
                method: "POST",
                description: "Subir un archivo Excel con mapeo y callback",
            },
            {
                url: "/tasks/:taskId",
                method: "GET",
                description:
                    "Obtener el estado de una tarea de carga de archivos",
            },
            {
                url: "/tasks/:taskId/errors",
                method: "GET",
                description:
                    "Obtener los errores de una tarea de carga de archivos",
            },
        ],
    };

    res.json(apiInfo);
});

app.use(routes);

module.exports = app;
