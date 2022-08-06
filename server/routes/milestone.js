import express from "express";
import {getMiles,createMile,getMilesByUser, deleteTour, getTour} from '../controllers/milestone.js'
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createMile);
router.get("/miles/:id", getMilesByUser);
router.get("/", getMiles);
router.delete("/:id", auth, deleteTour);
router.get("/:id", getTour);


// router.get("/miles/:id", auth, getMilesByUser);

export default router;
