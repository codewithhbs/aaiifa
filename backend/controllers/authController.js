  // backend/controllers/authController.js
  import bcrypt from "bcryptjs";
  import jwt from "jsonwebtoken";
  import User from "../models/User.js";


  export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log("Login request:", email, password);

    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log("User not found");
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Password incorrect");
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      console.log("Login success", user.email);
      res.json({ token, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  // @route   GET /api/auth/profile
 
  export const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user).select("-password");
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
