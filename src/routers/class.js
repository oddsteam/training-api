// src/routes/itemRoutes.ts
import express from "express";
import { getClasses } from "../controllers/class";
import { getClassDetails } from "../controllers/classDetails";


const router = express.Router();

router.get("/:id", getClassDetails)

router.get("", getClasses);

export default router;
