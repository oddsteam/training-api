// src/routes/itemRoutes.ts
import express from "express";
import { getClasses } from "../controllers/class";

const router = express.Router();

router.get("", getClasses);

export default router;
