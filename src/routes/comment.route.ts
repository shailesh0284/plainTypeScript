import { Router } from 'express';
import
  {
    commentsPagination,
    getComments,
    postComment,
  } from '../controllers/comment.controller';


const router: Router = Router();

router.get( '/', getComments );
router.post( '/:postId', postComment );
router.get( '/:id/', commentsPagination );

export const commentRouter: Router = router;
