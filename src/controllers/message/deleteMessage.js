import Message from "../../models/message";
import MessageMessage from "../../messages/messageMessages";

//Controller used to delete a product
export const deleteMessage = async (req, res) => {
  const response = new MessageMessage("elimina"); //message object with initial message delete
  if (req.params.id && req.user) {
    try {
      const doc = await Message.findByIdAndDelete(req.params.id);
      if (doc) {
        response.setStatusMessage(200);
        response.setData(doc);
      } else {
        response.setStatusMessage(404);
      }
    } catch (error) {
      error.kind === "ObjectId"
        ? response.setStatusMessage(400)
        : response.setStatusMessage(500);
    }
  } else {
    response.setStatusMessage(406);
  }
  res.json(response); //returns the entire object with the stored status and data
}