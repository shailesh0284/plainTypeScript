import { Request, Response, NextFunction } from 'express';
import mongoose, { Types } from 'mongoose';
import { getAllComments } from '../services/comment/getComment.service';
import { getCommentsByPostId } from '../services/comment/getCommentByPostId.service';
import { createComment } from '../services/comment/postComment.service';
import { addComment } from '../services/posts/commentOnPost.service';

export const getComments = async (
  req: Request,
  res: Response
): Promise<Response> =>
{
  const comments = await getAllComments();
  return res.json( {
    message: 'Comments fetched',
    data: comments,
    success: true,
  } );
};

export const postComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> =>
{
  try
  {
    // validatingRequest(req, res, next);
    const { body } = req.body;
    const { postId } = req.params;
    const { userid } = req.headers;

    const comment = await createComment( {
      body,
      userId: String( userid )
    } );

    console.log( "cdbbxvfvd", comment )
    await addComment( {
      postId,
      commentId: comment._id,
    } );

    return res.status( 200 ).json( {
      message: 'Comment created successfully',
      success: true,
      data: comment,
    } );
  } catch ( err )
  {
    console.error( 'error:', err.message );
    next( err );
  }
};

export const commentsPagination = async (
  req: Request,
  res: Response
): Promise<Response> =>
{
  const { id } = req.params;

  const { limit, skip } = req.query;

  const comments = await getCommentsByPostId( {
    postId: id,
    limit: parseInt( limit as string ) || 3,
    skip: parseInt( skip as string ) || 0,
  } );
  return res.json( {
    message: 'Comments fetched',
    data: comments,
    success: true,
  } );
};
