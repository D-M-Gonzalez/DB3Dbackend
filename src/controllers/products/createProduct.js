import Product from "../../models/product";
import ProductMessage from "../../messages/productMessages";

//Controller used to create a new product
export const createProduct = async (req, res) => {
  const response = new ProductMessage("create"); //message object with initial message create
  const date = new Date();

  if (!req.body.name || !req.body.price || !req.body.category || !req.body.subcategory) {
    response.setStatusMessage(406);
  } else
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      subcategory: req.body.subcategory,
      description1: req.body.description1,
      description2: req.body.description2,
      date: date,
    });
    res.locals.tags.forEach((el)=>{
      newProduct.tags.push(el)
    })
    res.locals.images.forEach((el)=>{
      newProduct.images.push(el)
    })
    const productSaved = await newProduct.save();
    response.setStatusMessage(200);
    response.setData(productSaved);
  } catch (error) {
    response.setStatusMessage(500);
    console.log(error)
  }
  res.json(response); //returns the entire object with the stored status and data
};
