import { db } from "@/db/firestore";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { DBPosition } from "@/db/models/position";
import { HandleError } from "@/utils/error";
import validate from "@/utils/validate";


export const GET = async (request: NextRequest) => {
    
    try {
        const params = new URL(request.url).searchParams;
        if (params.has("position_id")) {
            const position_id = params.get("position_id")!;
            const position = await db.positions.doc(position_id).get();
            const data = JSON.stringify(position.data());
            return new NextResponse(data);
        } else {

            const positions = await db.positions.get();
            const list: DBPosition[] = []
            for (const pos of positions.docs) {
                list.push(pos.data())
            }
            const data = JSON.stringify(list);
            return new NextResponse(data);
        }
    } catch (error) {
        console.log(error);
        return new NextResponse(undefined, {
            status: 500,
        });
    }
};

export const POST = async (request: NextRequest) => {
    interface Req extends DBPosition {}

    const invalid = await validate();

    if (invalid) {
        return invalid;
    }

    try {
        const data: Req = await request.json();
        const positionRef = db.positions.doc(data.position_id);
    } catch (error) {
        return new NextResponse("Error", { status: 500 });
    }
};

export const PUT = async (request: NextRequest) => {
    const invalid = await validate();

    if (invalid) {
        return invalid;
    }
};

export const PATCH = async (request: NextRequest) => {
    const invalid = await validate();

    if (invalid) {
        return invalid;
    }
};

export const DELETE = async (request: NextRequest) => {
    const invalid = await validate();

    if (invalid) {
        return invalid;
    }
};
