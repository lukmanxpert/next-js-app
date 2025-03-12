import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className=''>
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
            </ul>
        </div>
    );
};

export default NavBar;