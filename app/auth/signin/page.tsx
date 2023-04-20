// "use client";

import SignInPage from "@/components/auth/LoginPage";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const SignInPageHandler = async () => {
    const session = await getServerSession();
    if (session) {
        redirect("/");
    }

    return <SignInPage />;
};

export default SignInPageHandler;
