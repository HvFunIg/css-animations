import React from 'react';
import Feature from './Feature';
import Card3d from './features/Card3d/Card3d';

const FeaturesList = ({active,setActive}) => {
    return (
        <div>
            <Feature name="Тест">
                <div> Красивое</div>
            </Feature>
            <Feature name="3D карточка">
                <Card3d/>
            </Feature>
        </div>
    );
};

export default FeaturesList;