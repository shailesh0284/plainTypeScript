import { IComment } from '../../interfaces/comment.interface';
import { commentModel } from '../../model/comment';

export const getAllComments = async (): Promise<IComment[]> =>
  await commentModel.find({}).select('-_id -__v');
