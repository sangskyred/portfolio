'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NavDesktop = () => {
    useEffect(() => {

    }, []);

    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#resume", label: "Resume" },
        { href: "#services", label: "Services" },
        { href: "#contact", label: "Contact" },
    ];



    return (
        <nav id="navmenu" className="navmenu">
            <div className="logo">
                <Link href="/">Sang</Link>
            </div>
            <div className="menu">
                <ul>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}

                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavDesktop;
