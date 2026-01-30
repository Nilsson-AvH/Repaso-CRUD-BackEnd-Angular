import express from "express";
import { createCategory, deleteCategoryById, getAllCategories, getCategoryById, updateCategoryById } from "../controllers/category.controller.js";

const router = express.Router();

// Definir las rutas de esta entidad de esta API Rest
router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.delete('/:id', deleteCategoryById);
router.patch('/:id', updateCategoryById);

export default router;