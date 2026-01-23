import generateSlug from "../helpers/slug.helper.js";
import { dbCreateCategory } from "../services/category.service.js";

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

export {
    createCategory
};
