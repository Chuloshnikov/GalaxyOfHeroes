import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  name: {type: String, required: true, maxlength: 100},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String},
  phone: {type: String, maxlength: 60},
  address: {type: String, maxlength: 300},
  zipcode: {type: Number, maxlength: 20}
}, {timestamps: true});

export const User = models?.User || model('User', UserSchema);