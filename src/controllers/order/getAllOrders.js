import Order from '../../models/order';
import { getPagination } from "../../libs/getPagination";
import OrderMessage from '../../messages/orderMessages';

//Controller used to return a list of all orders
export const getAllOrders = async (req, res) => {
  let response = [];
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const list = await Order.paginate({}, { offset, limit });
    response = list.docs.map((el) => {
      const doc = new OrderMessage("locate");
      doc.setStatusMessage(200);
      doc.setData(el);
      return doc;
    });
    res.json(response); //returns the entire object array with the stored status and data
  } catch (error) {
    const singleResponse = new OrderMessage("locate");
    singleResponse.setStatusMessage(500);
    res.json(singleResponse); //returns the entire object with the stored status and data
  }
};
