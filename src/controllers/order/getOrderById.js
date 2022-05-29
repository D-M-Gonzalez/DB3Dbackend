import Order from '../../models/order';
import OrderMessage from '../../messages/orderMessages';

//Controller used to return a single product
export const getOrderById = async (req, res) => {
  const response = new OrderMessage("busca"); //message object with initial message locate
  if (req.params.id) {
    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        response.setStatusMessage(200);
        response.setData(order);
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