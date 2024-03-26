import express from "express";
const router = express.Router();

import {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
} from "../controllers/postController.js";

router.post("/:id", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.put("/:id", updatePostById);
router.delete("/:id", deletePostById);

export default router;
