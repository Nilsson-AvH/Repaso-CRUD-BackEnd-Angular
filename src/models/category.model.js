import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    // Estructura de datos del documento
    // TODO: Personalizar los mensajes de error para cada campo
    name: {
        // Jugos en agua
        type: String,
        required: true,
        minlength: 3,
    },
    slug: {
        // jugos-en-agua
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
},
// Configuración de la estrucutura de datos
{
    timestamps: true, // Crea dos campos createdAt y updatedAt
    versionKey: false // No crea el campo __v
}
);

const CategoryModel = mongoose.model(
    'category',  // Nombre de la colección mongoose lo pone en minúsculas y plural
    CategorySchema
);

export default CategoryModel;
