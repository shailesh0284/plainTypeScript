import { Request, Response, NextFunction } from 'express';
import { validatingRequest } from '../middlewares';
import { getAllPosts } from '../services/posts/getPost.service';
import { addLike } from '../services/posts/likeOnPost.service';
import { createPost } from '../services/posts/postPost.service';
import { updatePost } from '../services/posts/updatePost.service';

export const getPosts = async (
  req: Request,
  res: Response
): Promise<Response> =>
{
  const posts = await getAllPosts();
  return res.json( {
    message: 'Posts fetched',
    data: posts,
    success: true,
  } );
};

export const postPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> =>
{
  try
  {
    validatingRequest( req, res, next );

    const { title } = req.body;

    const { userid } = req.headers;

    const post = await createPost( {
      title: title as string,
      userId: userid as string
    } );

    return res.status( 201 ).json( {
      message: 'Post created successfully',
      success: true,
      data: post,
    } );
  } catch ( err )
  {
    console.error( 'error:', err.message );
    next( err );
  }
};

export const patchPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> =>
{
  try
  {
    validatingRequest( req, res, next );

    const { title } = req.body;

    const { id } = req.params;

    const post = await updatePost( {
      id,
      title,
    } );

    return res.status( 201 ).json( {
      message: 'Post updated successfully',
      success: true,
      data: post,
    } );
  } catch ( err )
  {
    console.error( 'error:', err.message );
    next( err );
  }
};

export const likePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> =>
{
  try
  {
    validatingRequest( req, res, next );

    const { id } = req.params;

    const post = await addLike( id );

    return res.status( 201 ).json( {
      message: 'Post liked successfully',
      success: true,
      data: post,
    } );
  } catch ( err )
  {
    console.error( 'error:', err.message );
    next( err );
  }
};
