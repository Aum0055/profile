import { NextRequest, NextResponse } from 'next/server'
import { SignInType, signInSchema } from '../z-schema-type';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/database.types';

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

    try {
        const data: SignInType = await request.json()
        const validate = signInSchema.safeParse(data);
        if (validate.success) {
            const { data: dataAuth, error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            })
            if (error) {
                throw error
            }
            return NextResponse.json({ status: 'success', error: null })
        } else {
            throw validate.error
        }

    } catch (error) {
        return NextResponse.json({
            status: 'error',
            error: error,
        }, {
            status: 401,
        })

    }
}