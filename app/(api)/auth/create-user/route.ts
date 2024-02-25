import { NextRequest, NextResponse } from 'next/server'
import { createUserSchema, createUserTyep } from '@/app/(api)/auth/z-schema-type';
import supabaseAdmin from '@/lib/supabase-admin';

export async function POST(request: NextRequest) {
    try {
        const data: createUserTyep = await request.json()
        const validate = createUserSchema.safeParse(data);
        if (validate.success) {
            const { data: dataAuth, error } = await supabaseAdmin.auth.admin.createUser({
                email: data.email,
                password: data.password,
                user_metadata: data.user_metadata,
                email_confirm: true
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