import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb"
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== "GET"){
        return res.status(405).end();
    }

    try {
        // fetch our users 
        const users = await prisma.user.findMany({
         orderBy: {
            createdAt:"desc"
         }   // we are going to order them by newest created
        });
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
        
    }
}