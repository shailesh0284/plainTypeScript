import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

export const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

export const userModel = model<IUser>('User', userSchema);
