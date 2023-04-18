import { useSession, signOut } from "next-auth/react"
import { redirect } from 'next/navigation';

// export const runtime = 'experimental-edge';

const logout = () => {
    // const { data: session } = useSession()
    // if (session) { return signOut() }
    // else { redirect("/") }
  }
  
  
export default logout;