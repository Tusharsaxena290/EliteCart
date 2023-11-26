import mongoose from "mongoose";



export const connectDataBase=()=>{
    mongoose.connect(process.env.DB_URI).then((con)=>{console.log(`Mongo DB connected with host 
    ${con.connection?.host} and data base ${con.connection.name}`)})
}