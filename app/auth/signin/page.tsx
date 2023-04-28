import SignInPage from "@/components/auth/LoginPage";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

// Redirect to '/' if user is already authenticated
const SignInPageHandler = async () => {
    const session = await getServerSession();
    if (session) {
        redirect("/");
    }
    return (
        <Suspense fallback={<></>}>
            <SignInPage />
        </Suspense>
    );
};

export default SignInPageHandler;
