const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
  const { username, email, password, age, gender, country } = req.body;
  // console.log("Request Body:", req.body);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      age,
      gender,
      country,
    });

    await newUser.save();
    res.status(201).json({ message: "User saved into database" });
  } catch (error) {
    console.error("Error saving user:", error);

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ error: "Validation failed", details: error.errors });
    }

    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }

    res.status(500).json({ error: "Error Saving User" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ error: "Invalid username or password" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: "Invalid username or password" });

    const token = jwt.sign({ id: user._id }, process.env.secretKey, {
      expiresIn: "1h",
    });

    const userId = await user._id;

    res.status(200).json({ success: "Login successfull", token, userId });
    // console.log(email, "This is Token", token);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal server error" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users Found" });
    }

    res.json({ users });
  } catch (error) {
    console.error("Cannot get Users!", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserprofile = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.secretKey);

    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = { userRegister, getAllUser, userLogin, getUserprofile };
