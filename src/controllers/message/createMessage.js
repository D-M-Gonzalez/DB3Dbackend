import Message from "../../models/message";
import MessageMessage from "../../messages/messageMessages";

//Controller used to create a new message
export const createMessage = async (req, res) => {
  const response = new MessageMessage("crea"); //message object with initial message create

  if (!req.body.text) {
    response.setStatusMessage(406);
  } else
  try {
    const newMessage = new Message({
      text: req.body.text,
    });
    const messageSaved = await newMessage.save();
    response.setStatusMessage(200);
    response.setData(messageSaved);
  } catch (error) {
    response.setStatusMessage(500);
    console.log(error)
  }
  res.json(response); //returns the entire object with the stored status and data
};
