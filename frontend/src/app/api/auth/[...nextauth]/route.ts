import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth";
import { config } from "../config";

const handler = NextAuth(config)

export { handler as GET, handler as POST }