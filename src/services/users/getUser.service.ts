import { IUser } from '../../interfaces/user.interface';
import { userModel } from '../../model/users';

export const getAllUsers = async (): Promise<IUser[]> =>
  await userModel.find().select('-_id -__v');
