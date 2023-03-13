import { body, check } from 'express-validator';

export const userValidator = [
  check('name')
    .isLength({ min: 5, max: 20 })
    .withMessage('The name must be at least 5 chars long or less than 20 chars')
    .bail()
    .isAlpha('en-US', { ignore: ' ' })
    .withMessage('The name must contain only letters')
    .bail(),

  check('email').isEmail().withMessage('You should provide valid email').bail(),
  check('avatar').isURL().withMessage('Provide valid url').bail(),
];
