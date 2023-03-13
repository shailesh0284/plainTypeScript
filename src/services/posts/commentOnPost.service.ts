import { postModel } from '../../model/post';

export const addComment = async (data: {
  postId: string;
  commentId: string;
}): Promise<any> => {
  const { postId, commentId } = data;

  const addedComment = await postModel.findOneAndUpdate(
    { _id: postId },
    { $push: { comments: commentId } },
    { new: true }
  );

  return addedComment;
};
