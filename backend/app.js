import  express  from "express";
import {config} from "dotenv";
import { connectDataBase } from "./dbConnect.js";
import errorMiddleWare from "./middleWares/errors.js"
config();  
//connecting to DB
connectDataBase();
const app=express();

//middlewares
app.use(express.json())
app.use(errorMiddleWare);

const port=process.env.PORT
//console.log(process.env.PORT)

//Import all routes
import productRoutes from "./routes/products.js";


app.use("/api/v1",productRoutes)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})