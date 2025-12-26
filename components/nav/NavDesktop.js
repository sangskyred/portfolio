import React from "react";
import Link from 'next/link'

const NavDesktop = () => {
    return (
        <nav className="nav-desktop">
            <div className="nav-portfolio">
                <div className="logo">
                    <Link href="/">Sang</Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link href="#section-home">Home</Link></li>
                        <li><Link href="#section-about">About</Link></li>
                        <li><Link href="#section-services">Services</Link></li>
                        <li><Link href="#section-home">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavDesktop;