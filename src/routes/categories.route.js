import express from "express";
import { createCategory, deleteCategoryById, getAllCategories } from "../controllers/category.controller.js";

const router = express.Router();

// Definir las rutas de esta entidad de esta API Rest
router.post('/', createCategory);
router.get('/', getAllCategories);
router.delete('/:id', deleteCategoryById);

export default router;