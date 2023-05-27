import { PrismaClient } from "@prisma/client";


declare global{
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;


// we are basically doing kind of like a fix or a hack for uh next js hot
// for next js wheel reloading because what happens is that next js can hot reload and create
// a bunch of new prisma client instances and then stuff just stops to work because
// its simply breaking stuff because too many instances are active so this prevents it by saving it in the global
// based variable which is not affected by hot reload all right