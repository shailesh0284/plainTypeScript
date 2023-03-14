import { redisService } from ".";
import { getCommentsByPostId } from "../comment/getCommentByPostId.service";

export const getCommentsByPostIdRedis = async (key: string) => {

    const params = key.split('_');
    const args = {}
    args['postId'] = params[0];
    args['limit'] = params[1];
    args['skip'] = params[2];

    return await redisService('commentsById', getCommentsByPostId, args);
}