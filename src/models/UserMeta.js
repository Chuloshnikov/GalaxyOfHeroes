import { Schema, model, models } from "mongoose";

const UserMetaSchema = new Schema({
    email: {type: String, required: true},
    phone: {type: String, maxlength: 60},
    streetAddress: {type: String, maxlength: 200},
    postalCode: {type: String, maxlength: 20},
    city: {type: String, maxlength: 200},
    country: {type: String, maxlength: 200},
    admin: {type: Boolean, default: false},
}, {timestamps: true});

export const UserMeta = models?.UserMeta || model('UserMeta', UserMetaSchema);