import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    // Configure one or more authentication providers
    site: process.env.NEXTAUTH_URL,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // authorization: {
            //     url: "https://example.com/oauth/authorization",
            // },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }: any) {
            if (account.provider === "google") {
                return (
                    profile.email_verified &&
                    profile.email.endsWith("@maine.edu")
                );
            }
            return true; // Do different verification for other providers that don't have `email_verified`
        },
        async redirect({ url, baseUrl }: any) {
            return baseUrl;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
