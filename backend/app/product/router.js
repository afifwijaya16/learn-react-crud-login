import express from "express";
import {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts,
} from "./controller.js";
import { verifyUser } from "../auth/middleware.js";
const router = express.Router();

router.get("/products", verifyUser, getProducts);
router.get("/products/:id", verifyUser, getProductsById);
router.post("/products", verifyUser, createProducts);
router.patch("/products/:id", verifyUser, updateProducts);
router.delete("/products/:id", verifyUser, deleteProducts);

export default router;
