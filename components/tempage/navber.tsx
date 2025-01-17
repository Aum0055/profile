import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem,Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "../icon/icon";
import { ThemeSwitcher } from "@/components/molecules/theme-switcher";

export const NavbarNext = () => {
    return (
        <Navbar>
            <NavbarBrand>
                 <p className="font-bold text-inherit text-xl">Proflie</p>
            </NavbarBrand>
         
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
                {/* <NavbarItem className=" lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
            </NavbarContent>
        </Navbar>
    )
}