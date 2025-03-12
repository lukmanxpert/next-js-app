import Link from 'next/link';
import React from 'react';

const ServicePages = () => {
    const services = [
        {
            id: 1,
            image: '/download.jpg'
        },
        {
            id: 2,
            image: '/download.jpg'
        },
        {
            id: 3,
            image: '/download.jpg'
        }
    ]
    return (
        <div>
            <h1>This is ServicePages!</h1>
            <div className='flex gap-4'>
                {services.map(s => {
                    return <div key={s.id}>
                        <Link href={`/services/${s.id}`}><img src={s.image} alt="" /></Link>
                    </div>
                })}
            </div>
        </div>
    );
};

export default ServicePages;