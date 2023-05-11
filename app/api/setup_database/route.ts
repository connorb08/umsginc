import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { people as peopleClient, auth } from "@googleapis/people";
import { User } from "@/db/models/user";
import { createUserRecord } from "@/db/helpers/user";

export const GET = async () => {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     return new NextResponse(
    //         JSON.stringify({ message: "You must be logged in." }),
    //         { status: 401 }
    //     );
    // }

    // const id_token  = String(session.id_token);
    // const access_token = String(session.access_token);

    // const oauth = new auth.OAuth2({
    //     clientId: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })

    // oauth.setCredentials({
    //     id_token: id_token,
    //     access_token: access_token
    // });

    // const client = peopleClient({
    //     version: "v1",
    //     auth: oauth
    // });

    // const email = "michael.delorge@maine.edu";

    // const res = await client.people.searchDirectoryPeople({
    //     pageSize: 1,
    //     query: `${email}`,
    //     readMask: "photos",
    //     sources: ["DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"],
    // });

    // interface peopleResponse {
    //     people: [{
    //         resourceName: string,
    //         etag: string,
    //         photos: [{
    //             metadata: {
    //                 primary: boolean,
    //                 source: {}
    //             },
    //             url: string
    //         }]
    //     }]
    // }

    // const {people}: peopleResponse = res.data as peopleResponse;
    // const photoURL: string = people[0].photos[0].url;

    // const new_user: User = new User(email, {
    //     name: 'Michael Delorge',
    //     avatar: photoURL
    // });

    // await new_user.createDatabaseRecord();
    

    // const res1 = createUserRecord("michael.delorge@maine.edu", "Michael Delorge")
    // const res2 = createUserRecord("keegan.tripp@maine.edu", "Keegan Tripp")

    // const responses = await Promise.all([
    //     // createUserRecord("hope.carroll@maine.edu", "Hope Carroll"), 
    //     // createUserRecord("riley.mills@maine.edu", "Riley Mills"),
    //     // createUserRecord("paige.allen@maine.edu", "Paige Allen"),
    //     // createUserRecord("myles.moore@maine.edu", "Myles Moore"),
    //     createUserRecord("jacob.chaplin@maine.edu", "Jacob Chaplin"),
    //     // createUserRecord("julian.ober@maine.edu", "Julian Ober")
    // ]);

    // for (const res of responses) {
    //     console.log(res);
    // }



    return new NextResponse("res");

};
