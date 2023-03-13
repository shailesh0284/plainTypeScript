import { check, header } from 'express-validator';

export const postValidator = [
  check( 'title' )
    .isLength( { min: 1, max: 2000 } )
    .withMessage( 'Title can not be empty' )
    .bail(),

  header( 'userid' ).exists( { checkFalsy: true } ).withMessage( 'Please provide userId in headers' ).bail(),
];
