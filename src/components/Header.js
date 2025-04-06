"use client";

import { usePathname } from "next/navigation";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import styles from "./Header.scss";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // 🔥 Add this line

    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);

    return (
        <header className="header">
            <div className="logo">Solar</div>

            <div className="header-web">
                <div >
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
                </div>
            </div>
            <div className="header-mobile">
                <button className="menuButton" onClick={openDrawer} aria-label="Open Menu">
                    <HamburgerIcon boxSize={6} />
                </button>
            </div>


            <SideDrawer isOpen={isOpen} onClose={closeDrawer} />
        </header>
    );
}
