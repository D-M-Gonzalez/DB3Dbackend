import User from "../../models/user";
import UserMessage from "../../messages/userMessages";
import bcrypt from "bcrypt";

//Controller used to create a new user
export const createUser = async (req, res) => {
  const response = new UserMessage("create");
  if (!req.body.email) {
    response.setStatusMessage(406);
  }
  try {
    const checkRepeated = await User.exists({ email: req.body.email });
    if (!checkRepeated) { //doesn't allow repeated usernames
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
      });
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt)
      const userSaved = await newUser.save();
      response.setStatusMessage(200);
      response.setData(userSaved);
    } else {
      response.setStatusMessage(409);
    }
  } catch (error) {
    response.setStatusMessage(500);
  }
  res.json(response); //returns the entire object with the stored status and data
};
