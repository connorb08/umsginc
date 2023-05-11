import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@/db/models/user";

export const authOptions = {
    site: process.env.NEXTAUTH_URL,
    pages: {
        signIn: "/auth/signin",
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "openid email profile https://www.googleapis.com/auth/directory.readonly",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }: any) {
            if (account.provider === "google") {
                if (
                    profile.email_verified &&
                    profile.email.endsWith("@maine.edu")
                ) {
                    const uid = account.providerAccountId;
                    try {
                        // Create user account if it doesn't exist
                        const new_user: User = new User(profile.email, {
                            name: profile.name,
                            avatar: profile.picture,
                        });
                        const res = await new_user.createDatabaseRecord();
                        // const write = await db.users.doc(uid).create(new_user.to_dict());
                    } catch (err) {
                        console.log(
                            "Cannot create account. User already exists or an error occured."
                        );
                    } finally {
                        return true;
                    }
                } else {
                    return false;
                } //return 'error_page?msg=must be verified and maine account
            }
            return false; // Do different verification for other providers that don't have `email_verified`
        },
        redirect({ url, baseUrl }: any) {
            return baseUrl;
        },
        async jwt({ token, user, account }: any) {
            if (account?.id_token) {
                (token.access_token = account.access_token),
                    (token.id_token = account.id_token);
            }
            return token;
        },
        async session({ session, token }: any) {
            if (token) {
                session.access_token = token.access_token;
                session.id_token = token.id_token;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
