import mongoose from "mongoose";

export interface IComment extends mongoose.Schema
{
  body: string;
  date?: Date;
  userId: mongoose.Types.ObjectId;
}


export interface ICommentParams
{
  body: string;
  date?: Date;
  userId: string;
}