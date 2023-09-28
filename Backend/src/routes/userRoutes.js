const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Rota para registrar usuários
router.post("/register", userController.registerUser);

module.exports = router;
