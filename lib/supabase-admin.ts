
// supabaseTwo.ts s

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrlAdmin: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKeyAdmin: string = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin: SupabaseClient = createClient(supabaseUrlAdmin, supabaseKeyAdmin);

export default supabaseAdmin;

