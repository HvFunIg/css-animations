import React from 'react';

import cl from "./Card3d.module.css"
const Card3d = () => {
    return (
        <div className={cl.wrap}>
            <div className={cl.card}>
                <div className={cl.front}> <span>Front</span> </div>
                <div className={cl.back}> <span>Back</span> </div>

            </div>
        </div>
    );
};

export default Card3d;