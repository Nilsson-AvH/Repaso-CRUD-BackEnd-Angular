import express from "express";
import dbConexion from "./config/mongo.config.js";
import categoriesRoute from "./routes/categories.route.js";

const app = express();
const port = 3000;

//Conectar a la base de datos
dbConexion();

//Definir la ruta base a los routers
app.use('/api/categories', categoriesRoute);

//Lanza el servidor
app.listen(port, () => {
    console.log("Server running on port: " + port);
});