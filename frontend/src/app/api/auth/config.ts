import type {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
  } from "next"
  import type { AuthOptions, NextAuthOptions } from "next-auth"
  import { getServerSession } from "next-auth"
  import CredentialsProvider from "next-auth/providers/credentials"

  const providers = {
    credentials: {
      email: { label: "Email", type: "text", placeholder: "Email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials?: Record<'email' | 'password', string>) {
      const {email, password} = credentials || {};

      if(email === 'bashhau@gmail.com' && password === 'Pass@123') {
          return {
              id: email,
              fullName: 'Bashir Ibrahim',
              email,
          }
      }
      return null
    }
  }

  export const config: AuthOptions = {
    providers: [CredentialsProvider(providers)],
  } satisfies NextAuthOptions
  
  // Use it in server contexts
  export function auth(
    ...args:
      | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
      | [NextApiRequest, NextApiResponse]
      | []
  ) {
    return getServerSession(...args, config)
  }