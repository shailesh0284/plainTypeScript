import { ICommentParams } from '../../interfaces/comment.interface';
import { commentModel } from '../../model/comment';

export const createComment = async ( data: ICommentParams ): Promise<any> =>
{
  const { body, userId } = data;

  const date = new Date().toLocaleString();
  const comment = await commentModel.create( {
    body,
    date,
    userId
  } );

  return comment;
};
