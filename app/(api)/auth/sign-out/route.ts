import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })


    const { error } = await supabase.auth.signOut()
    if (error) {
        return NextResponse.json(error)

    }
    return NextResponse.json({ status: 'success' })

}