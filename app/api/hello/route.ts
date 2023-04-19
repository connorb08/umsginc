// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }
// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

import type { NextRequest } from 'next/server'
import { getCurrentUser } from '../session'

// export const config = {
//   runtime: 'edge',
// }

export const GET = async (req: NextRequest) => {
  const user = await getCurrentUser();
  return new Response(JSON.stringify({ name: user?.name }))
}


