import { NavbarNext } from "@/components/tempage/navber"

export default function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <NavbarNext />
            {children}
        </section>)
}