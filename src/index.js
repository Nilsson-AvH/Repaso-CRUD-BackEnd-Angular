import express from "express";
import dbConexion from "./config/mongo.config.js";
import categoriesRoute from "./routes/categories.route.js";
import cors from "cors";

const app = express();
const port = 3000;

//Conectar a la base de datos
dbConexion();

// Habilitar el body parser o interprete de JSON desde postman
app.use(express.json());

//Habilitar cors para que pueda recibir peticiones desde el frontend Cross-Origin Resource Sharing
app.use(cors());

//Definir la ruta base a los routers
app.use('/api/categories', categoriesRoute);

//Lanza el servidor
app.listen(port, () => {
    console.log("Server running on port: " + port);
});