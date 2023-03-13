import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validatingRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) =>
{
  try
  {
    validationResult( req ).throw();
  } catch ( err )
  {
    throw new Error( err.array()[ 0 ].msg );
  }

};

export const errorHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) =>
{
  const status = error.status || 400;
  return res.status( status ).json( {
    message: error.message,
    success: false,
    data: {},
  } );
};
