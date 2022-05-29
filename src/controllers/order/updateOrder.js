import Order from '../../models/order';
import OrderMessage from '../../messages/orderMessages';

//Controller used to delete a order
export const updateOrder = async (req, res) => {
  const response = new OrderMessage("elimina"); //message object with initial message delete
  if (req.params.id && req.user) {
    try {
      const doc = await Order.findByIdAndUpdate(req.params.id, req.body);
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
};