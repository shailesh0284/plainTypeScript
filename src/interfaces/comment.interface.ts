import mongoose from "mongoose";

export interface IComment extends mongoose.Schema
{
  descriptions: string;
  date?: Date;
  userId: mongoose.Types.ObjectId;
}


export interface ICommentParams
{
  descriptions: string;
  date?: Date;
  userId: string;
}