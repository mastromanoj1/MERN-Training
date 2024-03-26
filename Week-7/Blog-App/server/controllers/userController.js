import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: `No user with the id: ${id}` });

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const signup = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    const encryptedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username: username,
      email: email,
      password: encryptedPassword,
      confirmPassword: encryptedPassword,
    });

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const finduser = await User.findOne({ email: email }).select("+password");
    console.log(finduser);
    if (!finduser)
      return res.status(400).json({
        success: false,
        message: `No Users with the email : ${email}`,
      });
    const comparePasswords = await bcrypt.compare(password, finduser.password);
    if (!comparePasswords)
      return res
        .status(400)
        .json({ success: false, message: `Invalid password` });
    res.status(200).json({ success: true, message: "Login successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const updateUserByID = async (req, res) => {
  try {
    const {id}=req.params
    const encryptedPassword = await bcrypt.hash(req.body.password, 12);
    const updateUser = await User.findByIdAndUpdate(
      id,{
      ...req.body,
      password:encryptedPassword,
      confirmPassword:encryptedPassword},
      { new: true }
    );
    res.status(200).json({ success: true, data: updateUser });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
export const deleteuserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result)
      return res
        .status(400)
        .json({ success: false, message: `No Users with the id : ${id}` });
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
