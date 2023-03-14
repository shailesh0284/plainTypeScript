import { redisService } from ".";
import { getAllUsers } from "../users/getUser.service";

export const getAllUsersDetails = async (key:string) => {
    return await redisService(key, getAllUsers, []);
} 