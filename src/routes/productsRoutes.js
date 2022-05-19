import { Router } from "express";
import { findAllProducts } from "../controllers/products/findAllProducts";
import { createProduct } from "../controllers/products/createProduct";
import { deleteProduct } from "../controllers/products/deleteProduct";
import { updateProduct } from "../controllers/products/updateProduct";
import { findProductById } from "../controllers/products/findProductById";
import {upload} from '../middleware/multer'
import verifyToken from "../middleware/authJWT";
import storeImages from "../middleware/firebaseUpload";
import defineTags from "../middleware/tags";
import { changePrices } from "../controllers/products/changePrices";

//Product routes definition
const router = Router();

router.get('/', findAllProducts) //Gets all the products in the DB

router.post('/',verifyToken,upload.array('images',3),storeImages,defineTags,createProduct) //Creates a new product, requires token

router.put('/:id',verifyToken,upload.array('images',3),storeImages,defineTags,updateProduct) //Modifies a product, uses Query parameteres, requires a token

router.get('/:id',findProductById) //Gets a single product by it's id as parameter

router.delete('/:id',verifyToken,deleteProduct) //Deletes a product using id as parameter, requires a token

router.put('/prices/:percentaje',verifyToken,changePrices)

export default router;