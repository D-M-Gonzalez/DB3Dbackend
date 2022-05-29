import Message from "../../models/message";
import MessageMessage from "../../messages/messageMessages";

//Controller used to update an existing user
export const updateMessage = async (req, res) => {
  const response = new MessageMessage("modifica");
  if (req.params.id && req.user) {
    try {
      const doc = await Message.findByIdAndUpdate(req.params.id, req.body);
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
