import { Router } from 'express';
import
{
  getPosts,
  likePost,
  patchPost,
  postPost,
} from '../controllers/post.controller';
import { postValidator } from '../middlewares/validators/post/postData.middleware';


const router: Router = Router();

router.get( '/', getPosts );
router.post( '/', postValidator, postPost );
router.patch( '/:id', patchPost );
router.patch( '/likes/:id', likePost );

export const postRouter: Router = router;
