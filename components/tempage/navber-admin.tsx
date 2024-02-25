'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/molecules/theme-switcher";
import { useRouter } from "next/navigation";

export const NavberAdmin = ({ status }: { status: boolean }) => {
                const { push } = useRouter();
const handleSignOut = async () => {
        const res = await fetch('/auth/sign-out', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const body = await res.json()        
        console.log(body);
        
        if (body.status === 'success') {
            push('/app/profile')
        }
    }

    return (
        <nav className="container mx-auto flex items-center justify-between py-3">
            <header>
                <p>Admin</p>
            </header>
            <header>

            </header>
            <header className="flex items-center gap-2">
                {status ?
                    <Button radius="sm" variant="bordered" onClick={handleSignOut}>Sign-out</Button>

                    :
                    <Link href='/sign-in'>
                        <Button radius="sm" variant="bordered">Sing-in</Button>
                    </Link>
                }

                <ThemeSwitcher />
            </header>
        </nav>
    )
}
