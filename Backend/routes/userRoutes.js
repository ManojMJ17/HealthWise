const userController = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.post("/register", userController.userRegister);
router.post("/login", userController.userLogin);

router.get("/getallusers", userController.getAllUser);
router.get("/profile", userController.getUserprofile);

module.exports = router;
