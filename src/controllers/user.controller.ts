import { Request, Response, NextFunction } from 'express';
import { validatingRequest } from '../middlewares';
import { getAllUsers } from '../services/users/getUser.service';
import { createUser } from '../services/users/postUser.service';

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getAllUsers();
  return res.json({
    statusCode: 200,
    message: 'Users fetched',
    data: users,
    success: true,
  });
};

export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    validatingRequest(req, res, next);

    const { name, email, avatar } = req.body;

    const user = await createUser({
      name,
      email,
      avatar,
    });

    return res.status(200).json({
      message: 'User created successfully',
      success: true,
      data: user,
    });
  } catch (err) {
    console.error('error:', err.message);
    next(err);
  }
};
