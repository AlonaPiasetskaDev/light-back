import { Schema, Document, Date } from "mongoose";
import { Prop, SchemaFactory } from '@nestjs/mongoose';


export class Profile extends Document {

  _id: { type: Schema.Types.ObjectId };

  address: { type: String, required: false };
  site: { type: String, required: false };
  age: { type: Number, required: false };
  gender: { type: String, required: false };
  avatar: { type: String, required: false };
  created: { type: Schema.Types.Date, default: Date };
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
