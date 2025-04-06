"use client";

import { usePathname } from "next/navigation";
import { IconButton, HStack, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import styles from "./Header.scss";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // 🔥 Add this line

    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <header className="header">
            <div className="logo">Solar</div>

            {isMobile ? (
                <button className="menuButton" onClick={openDrawer} aria-label="Open Menu">
                    <HamburgerIcon boxSize={6} />
                </button>
            ) : (
                <HStack spacing={6}>
                    <div className="menu-items">
                        <Link href="/" passHref>
                            <span className={pathname === "/" ? "activeLink" : ""}>Home</span>
                        </Link>

                        <Link href="/products" passHref>
                            <span className={pathname === "/products" ? "activeLink" : ""}>Products</span>
                        </Link>

                        <Link href="/about" passHref>
                            <span className={pathname === "/about" ? "activeLink" : ""}>About Us</span>
                        </Link>

                        <Link href="/contact" passHref>
                            <span className={pathname === "/contact" ? "activeLink" : ""}>Contact</span>
                        </Link>
                    </div>
                </HStack>
            )}

            <SideDrawer isOpen={isOpen} onClose={closeDrawer} />
        </header>
    );
}
