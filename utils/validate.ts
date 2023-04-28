import { getServerSession } from "next-auth/next";
import { HandleError } from "./error";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { db } from "@/db/firestore";

export const validate = async () => {

    try {
        const session = await getServerSession(authOptions);
        if (session) {
    
            const email = session.user?.email || "";
    
            if (email !== "") {
    
                const userRef = db.users.doc(email);
    
            } else {
                return new NextResponse("Unauthorized", { status: 401 });
            }
            
        }
        else {
            return new NextResponse("Unauthorized", { status: 401 });
        }
    } catch(error) {
        return HandleError(error as Error);
    }
    
};

export default validate;