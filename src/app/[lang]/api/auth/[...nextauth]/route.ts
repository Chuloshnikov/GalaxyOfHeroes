import mongoose from "mongoose";
import NextAuth from "next-auth";
import { User } from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcryptjs";
import dbConnect from "../../../../../lib/dbConnect";


interface Credentials {
  email: string;
  password: string;
}

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
              username: { label: "Email", type: "email", placeholder: "text@example.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Credentials, req: any) {
              await dbConnect().catch(error => { error: "Connection Failed...!"});
              console.log(credentials);
              const email = credentials?.email;
              const password = credentials?.password;
              
              mongoose.connect(process.env.MONGODB_URL);
              const user = await User.findOne({email});
              const passwordOk = user && await compare(password, user.password);

              if (passwordOk) {
                return user;
              } 

              return null;
            }
          })
    ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }