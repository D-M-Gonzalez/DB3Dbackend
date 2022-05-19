import User from "../../models/user";
import UserMessage from "../../messages/userMessages";

//Controller used to delete an user
export const deleteUser = async (req, res) => {
  const response = new UserMessage("delete");
  if (req.params.id && req.user) {
    try {
      const doc = await User.findByIdAndDelete(req.params.id);
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
