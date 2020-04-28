import React from 'react';
import Aux from '../hoc/Auxi';
import SliderBuilder from '../container/SliderBuilder/SliderBuilder';

const Gallery = () => {
    return (
        <Aux>
            <h1>DAEUN PARK sculpture</h1>
            <h2>Gallery</h2>
            <SliderBuilder />
        </Aux>
    );
};

export default Gallery;