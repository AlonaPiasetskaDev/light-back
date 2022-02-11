import { Schema } from 'mongoose';

export const ProfileSchema = new Schema({
  name: String,
  description: String,
  imageURL: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
