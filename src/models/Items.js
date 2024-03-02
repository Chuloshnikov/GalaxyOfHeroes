import {model, models, Schema} from "mongoose";

const ItemsSchema = new Schema({
    title: {
        type: String, required: true, maxlength: 100
    },
    brand: {
        type: String, required: true, maxlength: 60
    },
    description: {
        type: String, required: true, maxlength: 1000
    },
    authors: {
        type: String, maxlength: 60
    },
    illustrators: {
        type: String, maxlength: 60
    },
    format: {
        type: String, maxlength: 60
    },
    published: {
        type: String, maxlength: 60
    },
    category: {
        type: String, required: true, maxlength: 60
    },
    sku: {
        type: String, required: true, maxlength: 60
    },
    tags: {
        type: [{type: String}],
    },
    regularPrice: {
        type: Number, required: true, 
    },
    salePrice: {
        type: Number, required: false, 
    },
    quantity: {
        type: Number, required: true,
    },
    images: {
        type: [{type: String}],
    },
    topSeller: {type: Boolean, default: false},
    reviews: {
        type: Number,
    },
    ratings: {
        type: Number,
    },
    comments: {
        type: [
            {
            name: {type: String}, 
            date: {type: String}, 
            title: {type: String}, 
            description: {type: String}, 
            review: {type: Number},
            }
        ]
    },
    language: {
        type: String, required: true, maxlength: 30
    },       
}, {timestamps: true}
);


export default models?.Items || model("Items", ItemsSchema);