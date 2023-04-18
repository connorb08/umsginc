// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }
// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

import type { NextRequest } from 'next/server'

// export const config = {
//   runtime: 'edge',
// }

export const runtime = 'edge';

const handler = async (req: NextRequest) => {
  return new Response(JSON.stringify({ name: 'John Doe' }))
}

export {handler as GET, handler as POST}