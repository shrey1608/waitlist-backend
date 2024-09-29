const UserModel = require("../../database/models/userModel");
const ErrorServiceHandlerAPP =
  require("../../errorHandler/app/index").handleServiceAsyncAPP;

const createUserFormRecord = async (req, res) => {
  return ErrorServiceHandlerAPP(req, res, async (req) => {
    const existingMessage = await UserModel.findOne({ email: req.body.email });

    if (existingMessage) {
      return 1;
    }

    const { name, email, message } = req.body;

    const user = await UserModel.create({
      name,
      email,
      message,
    });

    return user;
  });
};

module.exports = {
  createUserFormRecord,
};
