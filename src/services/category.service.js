import CategoryModel from "../models/category.model.js"

const dbCreateCategory = async (newCategory) => {
    return await CategoryModel.create(newCategory);
}

const dbGetCategoryById = async (id) => {
    return await CategoryModel.findById(id);
}

const dbGetAllCategories = async () => {
    return await CategoryModel.find();
}

const dbDeleteCategoryById = async (id) => {
    return await CategoryModel.findByIdAndDelete(id);
}

const dbUpdateCategoryById = async (id, updateCategory) => {
    return await CategoryModel.findByIdAndUpdate(id, updateCategory, { new: true });
}

export {
    dbCreateCategory,
    dbGetCategoryById,
    dbGetAllCategories,
    dbDeleteCategoryById,
    dbUpdateCategoryById
}