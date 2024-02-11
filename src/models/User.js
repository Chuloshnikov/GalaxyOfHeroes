import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  name: {type: String, required: true, maxlength: 100},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String},
  phone: {type: String, maxlength: 60},
  streetAddress: {type: String, maxlength: 200},
  postalCode: {type: String, maxlength: 20},
  city: {type: String, maxlength: 200},
  country: {type: String, maxlength: 200},
}, {timestamps: true});

export const User = models?.User || model('User', UserSchema);