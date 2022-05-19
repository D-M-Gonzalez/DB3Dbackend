import Product from "../../models/product";
import ProductMessage from "../../messages/productMessages";

//Controller used to update a product, and it's brand if necessary
export const updateProduct = async (req, res) => {
  const response = new ProductMessage("update"); //message object with initial message update
  const date = new Date();
  if (req.params.id && req.user) {
    try {
      const foundProduct = await Product.findById(req.params.id);
      const updatedProduct = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        subcategory: req.body.subcategory,
        description1: req.body.description1,
        description2: req.body.description2,
        date: date,
      };
      if (res.locals.tags.length > 0){
        updatedProduct.tags = []
        res.locals.tags.forEach((el)=>{
          updatedProduct.tags.push(el)
        })
      }
      if (res.locals.images.length > 0){
        updatedProduct.images = []
        res.locals.images.forEach((el)=>{
          updatedProduct.images.push(el)
        })
      }
      await foundProduct.updateOne(updatedProduct);
      const productSaved = await foundProduct.save();
      if (productSaved) {
        response.setStatusMessage(200);
        response.setData(productSaved);
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
