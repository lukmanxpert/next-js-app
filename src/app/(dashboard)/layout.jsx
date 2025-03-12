import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
                <ul>
                    <li>Dashboard nav</li>
                    <li>Dashboard nav</li>
                    <li>Dashboard nav</li>
                </ul>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;