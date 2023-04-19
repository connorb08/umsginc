// import type { NextRequest } from "next/server";
// import SetupFirestore from "@/db/setup_db";

// export const GET = async (req: NextRequest) => {

//     const res = await SetupFirestore()
//         .then(() => {
//             console.log("then");
//             return new Response(
//                 JSON.stringify({
//                     result: "database setup",
//                 })
//             );
//         })
//         .catch((error) => {
//             return new Response(
//                 JSON.stringify({
//                     result: "error",
//                 }), {
//                     status: 418
//                 }
//             );
//         });

//     return res;
// };

export const POST = () => {
    return new Response("none");
}


export {}