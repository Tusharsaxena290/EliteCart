import  express  from "express";
import { deleteProduct, getProductDetails, getProducts, newProduct, updateProduct } from "../controllers/productcontroller.js";

const router=express.Router();

//all product related routes

//getProduct
router.route("/products").get(getProducts)

//createNewProduct
router.route("/admin/products").post(newProduct)

//find by product by :id
router.route("/products/:id").get(getProductDetails)

//update product
router.route("/products/:id").put(updateProduct)

//delete product
router.route("/products/:id").delete(deleteProduct)    


export default router;