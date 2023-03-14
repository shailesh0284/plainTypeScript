import client from "../../clients/redis";

export const redisService = async (key:string, fnc, args: object)=>{
    
    try{
        const data = await client.GET(key);
        if(data == null){
            const value = await fnc(args);
            await client.SET(key, JSON.stringify(value));
            return value;
        }
        return JSON.parse(data);
    }
    catch(err){
        throw new Error(err);
    }
}