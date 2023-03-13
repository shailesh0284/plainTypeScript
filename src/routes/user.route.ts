import { Router } from 'express';
import { getUsers, postUser } from '../controllers/user.controller';
import { userValidator } from '../middlewares/validators/users/userData.middleware';

const router: Router = Router();

router.get('/', getUsers);
router.post('/', userValidator, postUser);

export const userRouter: Router = router;
