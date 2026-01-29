import generateSlug from "../helpers/slug.helper.js";
import { dbCreateCategory, dbDeleteCategoryById, dbGetAllCategories } from "../services/category.service.js";

const createCategory = async (req, res) => {
    try {
        // 1. Extraemos los datos del body que deseamos guardar
        const newCategory = req.body;

        // 2. Generamos el slug a partir del nombre de la categoria
        newCategory.slug = generateSlug(newCategory.name);

        // 3. Llamamos al servicio para guardar la categoria
        const data = await dbCreateCategory(newCategory);
        
        // 4. Enviamos la respuesta al cliente
        res.json(data); 
    } 
    catch (error) {
        res.status(500).json({
            msg: 'Error al crear la categoria',
            error
        });
    }
};

const getAllCategories = async (req, res) => {
    try {
        // 1. Llamamos al servicio para guardar la categoria
        const data = await dbGetAllCategories();
        
        // 2. Enviamos la respuesta al cliente
        res.json(data); 
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener las categorias',
            error
        });
    }
};

const deleteCategoryById = async (req, res) => {
    try {
        // 1. Extraemos el id de la categoria a eliminar
        const id = req.params.id;
        
        // 2. Llamamos al servicio para eliminar la categoria
        const data = await dbDeleteCategoryById(id);
        
        // 3. Enviamos la respuesta al cliente
        res.json(data); 
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al eliminar la categoria',
            error
        });
    }
};

export {
    createCategory,
    getAllCategories,
    deleteCategoryById
};
