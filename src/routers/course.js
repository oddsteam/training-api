// src/routes/itemRoutes.ts
import express from "express";
import { getCourses } from "../controllers/course";

const router = express.Router();

router.get("", getCourses);

export default router;
