import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/lib/database.types'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const supabase = await createServerSupabaseClient()

//   await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       emailRedirectTo: `${requestUrl.origin}/auth/callback`,
//     },
//   })

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}