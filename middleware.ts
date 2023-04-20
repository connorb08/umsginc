export { default } from "next-auth/middleware"

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {

// }



// export { default as middleware } from 'next-auth/middleware'




// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   {
//     callbacks: {
//       async authorized({ token }) {
//         console.log('callback')
//         return !!token;
//       },
//     },
//   }
// );

// export function middleware() {return withAuth}

export const config = { matcher: ["/announcements"] }
