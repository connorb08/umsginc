import { getServerSession } from "next-auth/next";
import { SignInButton, UserProfileButton } from "./LoginButtonClient";

const LoginButton = async () => {
    
    const session = await getServerSession();

    if (session) {
        return (<UserProfileButton />)
        
    } else {
        return (<SignInButton />)
        
    }
    
};
export default LoginButton;