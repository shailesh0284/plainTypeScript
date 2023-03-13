import { postModel } from '../../model/post';

export const addLike = async (postId: string): Promise<any> => {
  const incrementLike = await postModel.findOneAndUpdate(
    { _id: postId },
    { $inc: { likes: 1 } },
    { new: true }
  );
  console.log(incrementLike, 'dsvfdbghmmgf');
  return incrementLike;
};
