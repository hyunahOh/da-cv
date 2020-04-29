import React from 'react';
import SliderBuilder from '../container/SliderBuilder/SliderBuilder';
import Wrapper from '../components/Layout/Layout';

const Gallery = () => {
    return (
        <React.Fragment>
            <Wrapper>
                <h1>DAEUN PARK sculpture</h1>
                <div>Gallery</div>
                <SliderBuilder />
            </Wrapper>
        </React.Fragment>
    );
};

export default Gallery;