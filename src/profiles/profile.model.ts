import { Schema, Document, Date } from "mongoose";
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type ProfileDocument = Profile & Document;

export class Profile {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  age: number;

  @Prop({ required: false })
  gender: string;

  @Prop({ required: false })
  avatar: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
