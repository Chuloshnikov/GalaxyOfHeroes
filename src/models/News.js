import {model, models, Schema} from "mongoose";

const NewsSchema = new Schema({
  title: {type: String, required: true, maxlength: 100},
  description: {type: String, required: true, maxlength: 1000},
  category: {type: String, required: true, maxlength: 100},
  image: {type: String}
}, {timestamps: true});

export const News = models?.News || model('New', NewsSchema);