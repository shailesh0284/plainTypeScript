import { userModel } from '../../model/users';
import { IUser } from '../../interfaces/user.interface';

export const createUser = async (data: IUser): Promise<IUser> => {
  const { name, email, avatar } = data;

  const user = await userModel.create({
    name,
    email,
    avatar,
  });

  return user;
};
