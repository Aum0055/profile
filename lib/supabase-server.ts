// NOTE: `createServerComponentSupabaseClient` has been renamed to `createServerComponentClient` in version `0.7.0`

import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
const cookieStore = cookies()

export const createServerSupabaseClient = () => createServerComponentClient({ cookies: () => cookieStore })
