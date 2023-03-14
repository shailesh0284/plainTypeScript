import mongoose from 'mongoose';
import { postModel } from '../../model/post';

export const getCommentsByPostId = async ( data: {
  postId: string;
  limit: number;
  skip: number;
} ): Promise<any> =>
{

  console.log(data.postId, "DSFghfds")
  const comments = await postModel.aggregate( [
    {
      $match: { _id: new mongoose.Types.ObjectId( data.postId ) },
    },
    {
      $lookup: {
        from: 'comments',
        localField: 'comments',
        foreignField: '_id',
        pipeline: [
          { $sort: { date: -1 } },
          { $skip: Number(data.skip) },
          { $limit: Number(data.limit) },
        ],
        as: 'comments',
      },
    },
    { $unwind: { path: "$comments", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "users",
        localField: 'comments.userId',
        foreignField: '_id',
        as: "usersDetails"
      }
    }, { $unwind: { path: "$usersDetails", preserveNullAndEmptyArrays: true } },
    {
      $project: {
        // title: 0,
        // likes: 0,
        comments: {
          userId: 1, descriptions: 1,
          usersDetails: "$usersDetails"
        },
        // users: { email: 0, avatar: 0, __v: 0 },
      },
    },
  ] );

  return comments;
};
