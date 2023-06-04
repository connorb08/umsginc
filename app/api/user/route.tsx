import { db } from "@/db/firestore";
import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/db/models/user";

export const GET = async (req: NextRequest) => {

    try {

        const session = await getServerSession(authOptions);
        // const user = session.user;
        const userEmail = session.user.email;
        // console.log(session)
        const user = new User(userEmail)
        // const x = await user.getUser()
        return new Response(JSON.stringify(await user.getUser()), {status: 200})

        // return session;


        // const { searchParams } = new URL(req.url);

        // if (searchParams.has("email")) {

        //     const email = searchParams.get("email")!;
        //     const user = await db.users.doc(email).get();

        //     if (!user.exists) {
        //         return new Response("NOTFOUND", {status: 404})
        //     }

        //     const data = JSON.stringify(user.data());
        //     return new Response(data);
            
        // }
        
    } catch (err) {
        console.log(err);
        return new Response("ERROR2", {status: 500})
    }
};
