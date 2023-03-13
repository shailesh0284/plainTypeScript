import { IPost } from '../../interfaces/post.interface';
import { postModel } from '../../model/post';

export const getAllPosts = async (): Promise<IPost[]> =>
  await postModel.aggregate([
    {
      $lookup: {
        from: 'comments',
        localField: 'comments',
        foreignField: '_id',
        as: 'commentData',
      },
    },
    {
      $project: { comments: 0 },
    },
  ]);
