import { db } from "@/db/firestore";
import type { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {

    try {

        const { searchParams } = new URL(req.url);

        if (searchParams.has("email")) {

            const email = searchParams.get("email")!;
            const user = await db.users.doc(email).get();

            if (!user.exists) {
                return new Response("NOTFOUND", {status: 404})
            }

            const data = JSON.stringify(user.data());
            return new Response(data);
            
        }
        
    } catch (err) {
        console.log(err);
        return new Response("ERROR", {status: 500})
    }
};
