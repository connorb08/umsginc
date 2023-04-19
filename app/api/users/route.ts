// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }
// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

import { db } from "@/app/db/init";
// import { handleClientScriptLoad } from "next/script";
import type { NextRequest } from "next/server";
// import { getCurrentUser } from "../session";

// export const config = {
//     runtime: "edge",
// };

const users = db.collection("users");

export const GET = async (req: NextRequest) => {
    // const user = await getCurrentUser();

    try {
        const { searchParams } = new URL(req.url);

        const uid = Number(searchParams.get("uid"));
        const userCol = (await users.where("uid", "==", uid).limit(1).get()).docs;

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

    // return new Response(JSON.stringify({ name: user?.name }));
};
