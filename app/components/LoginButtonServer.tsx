import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"; // Adjust path to your auth config
import LoginButtonClient from "./LoginButton";


export default async function LoginButtonServer() {
  const session = await getServerSession(authOptions); 

  return <LoginButtonClient session={session}/>
}
