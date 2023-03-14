import mongoose from 'mongoose';
import { IComment } from '../interfaces/comment.interface';

export const commentSchema = new mongoose.Schema( {
  descriptions: { type: String, required: true },
  date: { type: Date, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true },
} );

export const commentModel = mongoose.model<IComment>( 'Comment', commentSchema );
