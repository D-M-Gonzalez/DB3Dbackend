import User from "../../models/user";
import UserMessage from "../../messages/userMessages";

//Controller used to return a single product
export const findUserById = async (req, res) => {
  const response = new UserMessage("locate"); //message object with initial message locate
  if (req.params.id && req.user) {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        response.setStatusMessage(200);
        response.setData(user);
      } else {
        response.setStatusMessage(404);
      }
    } catch (error) {
      error.kind === "ObjectId" //returns different message for wrong id format and general server errors
        ? response.setStatusMessage(400)
        : response.setStatusMessage(500);
    }
  } else {
    response.setStatusMessage(406);
  }
  res.json(response); //returns the entire object with the stored status and data
};