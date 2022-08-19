import express from "express";
import {
  getNews,
  getNewById,
  createNews,
  updateNews,
  deleteNews,
} from "./controller.js";
import { verifyUser } from "../auth/middleware.js";
const router = express.Router();

router.get("/news", verifyUser, getNews);
router.get("/news/:id", verifyUser, getNewById);
router.post("/news", verifyUser, createNews);
router.patch("/news/:id", verifyUser, updateNews);
router.delete("/news/:id", verifyUser, deleteNews);

export default router;
