import { Schema, model } from 'mongoose';
import { IPost } from '../interfaces/post.interface';

export const postSchema = new Schema<IPost>( {
  title: { type: String, required: true },
  likes: { type: Number, required: true, default: 0 },
  userId: { type: String, required: true, ref: 'User' },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
} );

export const postModel = model<IPost>( 'Post', postSchema );
