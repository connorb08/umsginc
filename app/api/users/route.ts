import { db } from "@/db/firestore";
import type { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {

    try {
        const { searchParams } = new URL(req.url);

        const uid = Number(searchParams.get("uid"));
        const userCol = (await db.users.where("uid", "==", uid).limit(1).get()).docs;

        if (userCol.length > 0) {
            const data = JSON.stringify(userCol[0].data());
            return new Response(data);
        } else {
            return new Response("NOTFOUND", {status: 404})
        }

        
    } catch (err) {
        console.log(err);
        return new Response("ERROR", {status: 500})
    }

};
