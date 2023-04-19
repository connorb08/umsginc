
import { Session } from "next-auth/core/types"
import { getServerSession } from "next-auth/next"
import { authOptions } from "~/api/auth/[...nextauth]/route"

// Getting the session in Next13 app/ directory
// https://next-auth.js.org/configuration/nextjs#in-app-directory
export const getSession = async () : Promise<Session | null> => {
  return await getServerSession(authOptions)
}

export const getCurrentUser = async () => {
  const session = await getSession()
  return session?.user;
}

// export default function x(){}
