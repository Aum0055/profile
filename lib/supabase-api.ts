// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
// import { Database } from '@/lib/database.types';
// const cookieStore = cookies()
// export const createServerSupabaseRoute = () =>  createRouteHandlerClient<Database>({ cookies: () => cookieStore })
  
// NOTE: `createServerComponentSupabaseClient` has been renamed to `createServerComponentClient` in version `0.7.0`

import { cache } from "react"
import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "./database.types"

export const createServerSupabaseRoute = cache(async () => {
  const cookieStore = cookies()
  return createRouteHandlerClient<Database>({ cookies: () => cookieStore })
})
