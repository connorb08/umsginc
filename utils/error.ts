import { NextResponse } from "next/server";


export const HandleError = (error: Error) => {

    console.log(error);
    return new NextResponse("Error!", {status: 500})

}