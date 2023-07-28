import React from 'react';

const Feature = ({children, name}) => {
    return (
        <div className='feature'>
            <h3 className='feature__header'>{name}</h3>
            {children}
        </div>
    );
};

export default Feature;