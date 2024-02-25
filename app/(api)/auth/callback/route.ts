
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function GET(request: NextRequest) {
    const supabase = await createServerSupabaseClient()
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    
    if (code) {
      await supabase.auth.exchangeCodeForSession(code)
    }
  
    return NextResponse.redirect(new URL('/admin', request.url))
  }