import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  const { nextUrl } = req

  if (nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/app/profile', req.url))
  }

  let { data, error } = await supabase.auth.getSession()

console.log(data);


  return res
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    '/admin',
    '/app/profile',
    '/create-user',
    '/sign-in'
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}