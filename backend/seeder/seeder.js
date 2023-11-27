import mongoose from "mongoose";
import Product from "../models/product.js"
import products from "./data.js";


const seedProducts=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/elitecart");
        await Product.deleteMany();
        console.log("previous products deleted");

        await Product.insertMany(products);
        console.log("new products added");
        process.exit();

    }

    catch(error){
        console.log(error.message);
        process.exit();
    }
}

seedProducts();