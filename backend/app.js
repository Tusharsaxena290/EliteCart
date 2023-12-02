import  express  from "express";
import {config} from "dotenv";
import { connectDataBase } from "./dbConnect.js";
import errorMiddleWare from "./middleWares/errors.js"

//Handle uncaught exceptions
process.on("uncaughtException",(err)=>{
    console.log(`Error ${err}`);
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1);
})

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

const server=app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});

// Handle Unhandled Promise rejections
process.on('unhandledRejection',(err)=>{
    console.log(`Error ${err}`);
    console.log("Shutting down server due to unhandled promise rejection");
    server.close(()=>{
    process.exit(1);

    });
})
