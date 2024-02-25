import { NavberAdmin } from "@/components/tempage/navber-admin"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="container mx-auto">
                {children}
            </div>
        </section>)
}