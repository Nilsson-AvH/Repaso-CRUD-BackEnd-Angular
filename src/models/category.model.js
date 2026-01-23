import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    // Estructura de datos del documento
    // TODO: Personalizar los mensajes de error para cada campo
    name: {
        // Jugos en agua
        type: String,
        required: [true, 'El nombre de la categoria es obligatorio,'],
        minlength: [3, 'El nombre de la categoria debe tener al menos 3 caracteres'],
    },
    slug: {
        // jugos-en-agua
        type: String,
        required: [true, 'El slug de la categoria es obligatorio,'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'La descripcion de la categoria es obligatoria,'],
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
