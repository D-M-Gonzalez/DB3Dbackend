import Message from "../../models/message";
import MessageMessage from "../../messages/messageMessages";

//Controller used to return a single product
export const getMessageById = async (req, res) => {
  const response = new MessageMessage("busca"); //message object with initial message locate
  if (req.params.id) {
    try {
      const message = await Message.findById(req.params.id);
      if (message) {
        response.setStatusMessage(200);
        response.setData(message);
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