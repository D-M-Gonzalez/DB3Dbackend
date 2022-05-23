import Order from '../../models/order';
import User from '../../models/user';
import OrderMessage from '../../messages/orderMessages';

//Controller used to delete a order
export const deleteOrder = async (req, res) => {
  const response = new OrderMessage("delete"); //message object with initial message delete
  if (req.params.id && req.user) {
    try {
      const doc = await Order.findByIdAndDelete(req.params.id);
      if (doc) {
        const updateUser = await User.findOne({ email: doc.email })
        let newProductsArray = [];
        updateUser.products.forEach((product)=>{
            product.id !== req.params.id && newProductsArray.push(product)
        })
        updateUser.products = newProductsArray;
        const saveUser = await updateUser.save();
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