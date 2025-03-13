// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import { PrismaClient } from "@prisma/client";
// // import bcrypt from "bcryptjs";
// // import { PrismaAdapter } from "@next-auth/prisma-adapter";



// const authOptions = {
//     providers: [
//       GithubProvider({
//         clientId: process.env.GITHUB_CLIENT_ID!,
//         clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//       }),
//     ],
//   };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };



















// // Initialize Prisma Client
// const prisma = new PrismaClient();

// declare module "next-auth" {
//     interface Session {
//       user: {
//         id: string;
//         name?: string | null;
//         email?: string | null;
//         image?: string | null;
//       };
//     }
  
//     interface User {
//       id: string;
//     }
//   }

// export const authOptions: AuthOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", required: true },
//         password: { label: "Password", type: "password", required: true },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Email and password are required.");
//         }

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user || !user.password) {
//           throw new Error("Invalid credentials.");
//         }

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("Invalid credentials.");
//         }

//         return { id: user.id, email: user.email, name: user.name };
//       },
//     }),
//   ],
//   session: { strategy: "jwt" as SessionStrategy }, 
//   callbacks: {
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.sub!;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login", 
//   },
//   adapter: PrismaAdapter(prisma), 
// };

// export default NextAuth(authOptions);

