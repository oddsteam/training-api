// src/routes/itemRoutes.ts
import express from "express";
import { getClasses } from "../controllers/class";
import { getClassDetails } from "../controllers/classDetails";
import { setEmailClassReminder } from "../controllers/reminder";


const router = express.Router();


const classService = require('../services/classDetails');

router.get("/:id", async (req,res) => {
    try {
        const classId = req.params.id;
        const classDetails = await classService.getClass(classId);
        if (!classDetails) {
          return res.status(404).json({ message: 'Class not found' });
        }
    
        res.json(classDetails);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

router.get("", getClasses);

router.post("/reminder", setEmailClassReminder);

export default router;
