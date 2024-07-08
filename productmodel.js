const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter name"],
        trim: true
    },
    description:{
        type: String,
        required: [true, "Please enter desciption "]
    },
    price:{
        type: Number,
        required: [true, "Please enter price"],
        maxLength: [10, "Price is not more than 10 digit"]
    },
    ratings:{
        type: Number,
        default: 0
    },
    image:[
    {
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
        },
    },
    ],
    category:{
        type: String,
        require: [true, "Please enter category"]
    },
    stock:{
        type: Number,
        required: [true, "Please enter stock"],
        length: [3, "Cannot exceed 3 digit"],
        default:1
    },
    numOfReviews:{
            type: Number,
            default: 0
        },
        reviews:[
            {
                user:{
                    type: mongoose.Schema.ObjectId,
                    ref:"User",
                    required: true,
                },
                name:{
                    type: String,
                    required: true,
                },
                rating:{
                    type: Number,
                    required: true,
                },
                Comment:{
                    type: String,
                    required: true,
                }
            }
        ],
        user: {
            type: mongoose.Schema.ObjectId,
            ref:"User",
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;