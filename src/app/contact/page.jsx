"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const ContactPage = () => {
    const router = useRouter();
    const user = false;
    const handleAddressNavigate = () => {
        if (user) {
            router.push("/contact/address")
        } else {
            router.push("/")
        }
    }
    return (
        <div>
            <h1>This is contact ServicePages!</h1>
            <button className='text-2xl font-bold border-2 rounded-2xl m-2 p-2' onClick={handleAddressNavigate} type='button'>Address</button>
        </div>
    );
};

export default ContactPage;