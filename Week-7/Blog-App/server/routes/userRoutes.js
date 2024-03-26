import express from "express";
import {
  getAllUsers,
  getUserById,
  signup,
  signin,
  updateUserByID,
  deleteuserById
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/signup", signup);

router.post("/signin", signin);

router.put("/:id",updateUserByID);

router.delete("/:id",deleteuserById);

export default router;
