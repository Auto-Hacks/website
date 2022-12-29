import {NextApiRequest, NextApiResponse} from "next";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import applyRateLimit from "../../lib/limit"
import User from "../../lib/user"
import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== 'POST') {
       res.status(405).send('Only POST requests allowed')
       return
    }
    const user = new User(req.body.name, req.body.email, req.body.phone, req.body.school);
    const errors = await validate(user);
    if (errors.length > 0){
        res.status(400).send(errors)
        return
    }

    const dbEmail = await prisma.user.findUnique({where: {email: user.email}})
    const dbPhone = await prisma.user.findUnique({where: {phoneNumber: user.phone}});
    if (dbEmail || dbPhone){
        return res.status(400).send({message: "exists"});
    }
    try {
        await applyRateLimit(req, res)
    }
    catch {
        return res.status(429).send("Too many requests")
    }
    await prisma.user.create({data: {email: user.email, phoneNumber: user.phone, school: user.school, name: user.name}})
    res.status(200).json({ text: 'Validated' });
}
