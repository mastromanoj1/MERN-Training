import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { id } = req.params;
    const postObj = req.body;
    const post = await Post.create({ author: id, ...postObj });

    res.status(202).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author");
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: `No user found with id: ${id}` });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const updatePostById = async (req, res) => {
  try {
    const {id} = req.params;
    const {title,descripttion,image,tags}= req.body
    const updatedPost = await Post.findByIdAndUpdate(id, {$set: {
      title : title,
      description:descripttion,
      image : image,
      tags:tags
    } });

    if (!updatedPost) {
      return res
        .status(404)
        .json({ success: false, message: `No user found with id: ${id}` });
    }

    res.status(200).json({ success: true, data: updatedPost });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const deletePostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res
        .status(404)
        .json({ success: false, message: `No user found with id: ${id}` });
    }

    res.status(200).json({ success: true, data: deletedPost });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
