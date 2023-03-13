import { Router } from 'express';
import { userRouter } from './user.route';
import { postRouter } from './post.route';
import { commentRouter } from './comment.route';

const routes: Router = Router();

routes.use('/user', userRouter);
routes.use('/post', postRouter);
routes.use('/comments', commentRouter);

export default routes;
