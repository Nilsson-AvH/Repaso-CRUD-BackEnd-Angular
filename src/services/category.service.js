import CategoryModel from "../models/category.model.js"

const dbCreateCategory = async (newCategory) => {
    return await CategoryModel.create(newCategory);
}

const dbGetAllCategories = async () => {
    return await CategoryModel.find();
}

const dbDeleteCategoryById = async (id) => {
    return await CategoryModel.findByIdAndDelete(id);
}

export {
    dbCreateCategory,
    dbGetAllCategories,
    dbDeleteCategoryById
}