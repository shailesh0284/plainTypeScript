import { check, header } from 'express-validator';

export const postValidator = [
  check( 'title' )
    .isLength( { min: 1, max: 2000 } )
    .withMessage( 'Title can not be empty' )
    .bail(),

  check( 'userId' )
    .isLength({min:0})
    .withMessage( 'Please provide valid userId' )
    .bail(),
]