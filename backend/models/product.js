import mongoose  from "mongoose";

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the product name"],
        maxLength:[200,"Product name can not exceed 200 characters"],
    },

    price:{
        type:Number,
        required:[true,"Please enter the product's price"],
        maxLength:[5,"Product price can not exceed 5 digits"],
    },

    description:{
        type:String,
        required:[true,"Please enter the product's description"],
       
    },

    ratings:{
        type:Number,
        default:0
       
    },

    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            },
        },
    ],

    category:{
        type:String,
        required:[true,"Please enter the category of the product"],
        enum:{
            values:["Electronics",
            "Cameras",
            "Laptops",
            "Accessories",
            "Headphones",
            "Food",
            "Books",
            "Sports",
            "Outdoor",
            "Home"
        ],
            message:"Please select correct category",
        }
    },

    seller:{
        type:String,
        required:[true,"Please enter the seller of the product"],
    },

    stock:{
        type:Number,
        required:[true,"Please enter the stock of the product"],
    },

    numOfReviews:{
        type:Number,
        default:0,
    },

    reviews:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:false,
            },

            rating:{
                type:Number,
                required:true

            },
            comment:{
                type:String,
                required:true
            }


        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:false,
    },
   

    


    
    


},{timestamps:true});

export default mongoose.model("Product",productSchema)