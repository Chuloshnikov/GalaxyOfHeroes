import {model, models, Schema} from "mongoose";

const NewsSchema = new Schema({
  title: {type: String, required: true, maxlength: 100},
  description: {type: String, required: true, maxlength: 1000},
  topic: {type: String, required: true, maxlength: 30},
  image: {type: String},
  language: {type: String, required: true, maxlength: 30}, 
}, {timestamps: true});

export default models?.News || model('News', NewsSchema);