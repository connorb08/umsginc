import { NextResponse } from "next/server";


export default function HandleError (error: Error) {

    console.log(error);
    return new NextResponse("Error!", {status: 500})

}