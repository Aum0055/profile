import { NavberAdmin } from "@/components/tempage/navber-admin"
import { createServerSupabaseClient } from "@/lib/supabase-server"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = createServerSupabaseClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    return (
        <section>
            <NavberAdmin status={user?true:false} />
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    )
}