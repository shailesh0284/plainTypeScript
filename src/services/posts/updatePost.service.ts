import { postModel } from '../../model/post';

export const updatePost = async (data: {
  id: string;
  title: string;
}): Promise<any> => {
  const updatedPost = await postModel.findOneAndUpdate(
    { _id: data.id },
    { title: data.title },
    { new: true }
  );

  return updatedPost;
};
