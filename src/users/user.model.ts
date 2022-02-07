import { Schema, Document } from "mongoose";
import { Prop, SchemaFactory } from '@nestjs/mongoose';

import { Profile } from '../profiles/profile.model'

export class User extends Document {
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  isActive: Boolean;
  created: { type: Date };
  updated: { type: Date };

  @Prop({ type: [Schema.Types.ObjectId], ref: Profile.name })
  profiles: [Profile];
}

export const UserSchema = SchemaFactory.createForClass(User);
