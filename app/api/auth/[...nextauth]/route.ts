import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/app/db/init";
import { getProviders } from "next-auth/react";
import { User } from "@/app/db/user";

export const authOptions = {
    // Configure one or more authentication providers
    site: process.env.NEXTAUTH_URL,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async signIn({ account, profile }: any) {
            if (account.provider === "google") {
                if (profile.email_verified && profile.email.endsWith("@maine.edu")) {
                    
                    const uid = account.providerAccountId;

                    try {

                        // Create user account if it doesn't exist
                        const new_user: User = {
                            uid: uid,
                            email: profile.email,
                            position: "none"
                        }
                        const write = await db.collection('users').doc(uid).create(new_user)

                    } finally {return true}

                } else { return false; } //return 'error_page?msg=must be verified and maine account
            }
            return false; // Do different verification for other providers that don't have `email_verified`
        },
        async redirect({ url, baseUrl }: any) {
            return baseUrl;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
