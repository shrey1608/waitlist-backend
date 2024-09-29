const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/app/userController");

router.post("/create", UserController.userFormRecord);

module.exports = router;
