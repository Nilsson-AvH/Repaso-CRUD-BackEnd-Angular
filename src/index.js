import express from "express";
import categoriesRoute from "./routes/categories.route.js";

const app = express();
const port = 3000;

//Definir la ruta base a los routers
app.use('/api/categories', categoriesRoute);

//Lanza el servidor
app.listen(port, () => {
    console.log("Server running on port: " + port);
});