import Product from "../../models/product";
import ProductMessage from "../../messages/productMessages";
import filterBySearch from "../../libs/filterBySearch";
import filterByCategory from "../../libs/filterByCategory";
import filterBySubCategory from "../../libs/filterBySubCategory";
import sortProducts from "../../libs/sortProducts";

//Controller used to return all the products
export const findAllProducts = async (req, res) => {
  let response = {
    items: [],
    total: 0
  };
  try {
    const { page, size, category, subcategory, search, sort} = req.query;
    const allProducts = await Product.find()

    const filteredBySearch = filterBySearch(allProducts,search)
    const filteredByCat = filterByCategory(filteredBySearch,category)
    const filteredBySubCat = filterBySubCategory(filteredByCat,subcategory)
    const sortedProducts = sortProducts(filteredBySubCat,sort)

    const paginatedProducts = sortedProducts.slice((size*(page-1)),(size*page))
    response.items = paginatedProducts.map((el) => {
      const doc = new ProductMessage("busca"); //message object for every index with initial message locate
      doc.setStatusMessage(200);
      doc.setData(el);
      return doc;
    });


    response.total = filteredBySubCat.length;
    res.json(response); //returns the entire object array with the stored status and data*/
  } catch (error) {
    console.log(error)
    const singleResponse = new ProductMessage("busca"); //message object with inital message locate
    singleResponse.setStatusMessage(500);
    res.json(singleResponse); //returns the entire object with the stored status and data
  }
};
