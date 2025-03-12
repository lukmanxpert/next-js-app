import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-[500px] flex justify-center items-center'>
            <div className='text-center'>
                <h1>404</h1>
                <p className='mb-6'>Not Found Pages!</p>
                <Link className='border-2 rounded-2xl p-2' href={"/"}>Go Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;