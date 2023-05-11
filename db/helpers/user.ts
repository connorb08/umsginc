import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { auth, people as peopleClient } from "@googleapis/people";
import { getServerSession } from "next-auth/next";
import { DBUser, User } from "../models/user";

interface CreateUserRecordResponse {
    success: boolean;
    user: DBUser | null;
}

interface peopleResponse {
    people: [
        {
            resourceName: string;
            etag: string;
            photos: [
                {
                    metadata: {
                        primary: boolean;
                        source: {};
                    };
                    url: string;
                }
            ];
        }
    ];
}

export const createUserRecord = async (email: string, name: string): Promise<CreateUserRecordResponse> => {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            // console.log('no session')
            return {
                success: false,
                user: null,
            };
        }

        const id_token = String(session.id_token);
        const access_token = String(session.access_token);

        // console.log(session)

        const oauth = new auth.OAuth2({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        });

        oauth.setCredentials({
            id_token: id_token,
            access_token: access_token,
        });

        const client = peopleClient({
            version: "v1",
            auth: oauth
        });

        const res = await client.people.searchDirectoryPeople({
            pageSize: 1,
            query: `${email}`,
            readMask: "photos",
            sources: ["DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"],
        });

        const { people }: peopleResponse = res.data as peopleResponse;

        const photoInfo = people[0].photos;
        const photoURL: string = (photoInfo) ? photoInfo[0].url : "";

        const new_user: User = new User(email, {
            name: name,
            avatar: photoURL,
        });

        await new_user.createDatabaseRecord();

        // console.log('return')

        return {
            success: true,
            user: new_user.to_dict(),
        };
    } catch (error) {
        console.log(error)
        // console.log('error')
        return {
            success: false,
            user: null,
        };
    }
};

export {};
