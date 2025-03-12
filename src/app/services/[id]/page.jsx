import Link from 'next/link';
import React from 'react';

const ServiceDetails = ({ params }) => {
    const id = params.id;
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
    const service = services.find(s => s.id === parseInt(id));
    console.log(service, id);
    if (service) {
        return (
            <div>
                <h1>Service Details Page!</h1>
                <p>Service ID: {service.id}</p>
                <img src={service.image} alt="" />
            </div>
        );
    } else {
        return <div className='min-h-[500px]'>
            <p className='text-red-500'>No service found!</p>
            <Link href={"/services"}>Back to service</Link>
        </div>
    }

};

export default ServiceDetails;