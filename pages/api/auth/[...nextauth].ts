import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/libs/prismadb";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "email", type: "text"},
                password: {label: "password", type: "password"},
            },
            async authorize(credentials) { // we check if credentials has email and password
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Invalid credentials")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if(!user || !user?.hashedPassword){
                    throw new Error("Invalid crendtials")
                }
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )
                if(!isCorrectPassword){
                    throw new Error("Invalid credentials")
                }
                return user;
            }
        })
    ],
    // we write debug to be equal to process.env that NODE_ENV identical 
    // to development so we want to turn on the debug of we are in development
    // this will help you a lot because we will see a bunch of information 
    // in our terminal and its going to help us debug stop or
    
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
})