import Product from "../../models/product";
import ProductMessage from "../../messages/productMessages";

//Controller used to delete a product
export const deleteProduct = async (req, res) => {
  const response = new ProductMessage("delete"); //message object with initial message delete
  if (req.params.id && req.user) {
    try {
      const doc = await Product.findByIdAndDelete(req.params.id);
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
