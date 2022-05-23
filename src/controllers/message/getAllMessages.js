import Message from "../../models/message";
import MessageMessage from "../../messages/messageMessages";

//Controller used to return a list of all users
export const getAllMessages = async (req, res) => {
  let response = [];
  try {
    const list = await Message.find()
    response = list.docs.map((el) => {
      const doc = new MessageMessage("locate");
      doc.setStatusMessage(200);
      doc.setData(el);
      return doc;
    });
    res.json(response); //returns the entire object array with the stored status and data
  } catch (error) {
    const singleResponse = new MessageMessage("locate");
    singleResponse.setStatusMessage(500);
    res.json(singleResponse); //returns the entire object with the stored status and data
  }
};