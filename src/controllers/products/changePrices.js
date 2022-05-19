import Product from "../../models/product";
import ProductMessage from "../../messages/productMessages";

export const changePrices = async (req, res) => {
    let response = ""
    if (req.user) {
      try {
        const allProducts = await Product.find()
        allProducts.forEach(async (product)=>{
            const updatedProduct = {
                price: product.price * req.params.percentaje,
            }
            response = await product.updateOne(updatedProduct);
        })
      } catch (error) {
          console.log(error)
      }
    } else {
        console.log(error)
    }
    res.json(response);
  };