require("./config/mongoose");
const app = require("./app");
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor en el puerto: ", PORT);
});
