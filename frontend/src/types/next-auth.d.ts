import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    fullName: string;
    email: string;
  }
}
