import User from "../../models/user";
import UserMessage from "../../messages/userMessages";

//Controller used to update an existing user
export const updateUser = async (req, res) => {
  const response = new UserMessage("update");
  if (req.params.id && req.user) {
    try {
      const doc = await User.findByIdAndUpdate(req.params.id, req.body);
      if (doc) {
        response.setStatusMessage(200);
        response.setData(doc);
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
