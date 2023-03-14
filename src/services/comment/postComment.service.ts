import { ICommentParams } from '../../interfaces/comment.interface';
import { commentModel } from '../../model/comment';

export const createComment = async ( data: ICommentParams ): Promise<any> =>
{
  const { descriptions, userId } = data;

  const date = new Date().toLocaleString();
  const comment = await commentModel.create( {
    descriptions,
    date,
    userId
  } );

  return comment;
};
