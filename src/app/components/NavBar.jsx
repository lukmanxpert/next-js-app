"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
    if (!pathname.includes("dashboard")) {
        return <div className=''>
            <ul className='flex justify-evenly items-center text-3xl'>
                <Link href={"/"}>
                    <li>Home</li>
                </Link>
                <Link href={"/services"}>
                    <li>Services</li>
                </Link>
                <Link href={"/contact"}>
                    <li>Contact</li>
                </Link>
                <Link href={"/login"}>
                    <li>Login</li>
                </Link>
                <Link href={"/registration"}>
                    <li>Registration</li>
                </Link>
            </ul>
        </div>
    } else {
        return <></>
    }
};

export default NavBar;