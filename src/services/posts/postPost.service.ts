import { postModel } from '../../model/post';
import { IPost } from '../../interfaces/post.interface';

export const createPost = async ( data: IPost ): Promise<IPost> =>
{
  const { title, userId } = data;

  const post = await postModel.create( {
    title,
    userId
  } );

  return post;
};
