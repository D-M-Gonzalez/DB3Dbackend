import User from "../../models/user";
import { getPagination } from "../../libs/getPagination";
import UserMessage from "../../messages/userMessages";

//Controller used to return a list of all users
export const findAllUsers = async (req, res) => {
  let response = [];
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const list = await User.paginate({}, { offset, limit });
    response = list.docs.map((el) => {
      const doc = new UserMessage("locate");
      doc.setStatusMessage(200);
      doc.setData(el);
      return doc;
    });
    res.json(response); //returns the entire object array with the stored status and data
  } catch (error) {
    const singleResponse = new UserMessage("locate");
    singleResponse.setStatusMessage(500);
    res.json(singleResponse); //returns the entire object with the stored status and data
  }
};
