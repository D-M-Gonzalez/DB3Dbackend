import Product from "../../models/product";
import ProductMessage from "../../messages/productMessages";

//Controller used to return a single product
export const findProductById = async (req, res) => {
  const response = new ProductMessage("locate"); //message object with initial message locate
  if (req.params.id) {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        response.setStatusMessage(200);
        response.setData(product);
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
