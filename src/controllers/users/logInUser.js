import User from "../../models/user";
import jwt from "jsonwebtoken";
import UserMessage from "../../messages/userMessages";
import bcrypt from "bcrypt";

//Controller used to validate an user login request using JWT token
export const logInUser = async (req, res) => {
  const response = new UserMessage("ingresa");
  if (!req.body.email || !req.body.password) {
    response.setStatusMessage(406);
  } else {
    try {
      const checkUser = await User.findOne({ email: req.body.email });
      const checkPassword = await bcrypt.compare(req.body.password, checkUser.password);
      const token = jwt.sign(
        {
          id: checkUser._id,
        },
        process.env.API_SECRET,
        {
          expiresIn: 86400,
        }
      );

      if (checkUser && checkPassword) {
        response.setStatusMessage(200);
        response.setData(checkUser, token);
      } else {
        response.setStatusMessage(401);
      }
    } catch (error) {
      response.setStatusMessage(500);
    }
  }
  res.json(response); //returns the entire object with the stored status and data
}
