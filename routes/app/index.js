var express = require("express");
var router = express.Router();

const UserRouter = require("./user");

router.use("/user", UserRouter);

module.exports = router;
