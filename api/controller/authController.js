import user from "../models/user.moddle.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const hashedpassword = bcryptjs.hashSync(password, 10);
  const newUser = new user({ username, email, password: hashedpassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
