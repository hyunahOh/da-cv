import React, { Component } from 'react';
import SingleSlider from '../../components/SingleSlider/SingleSlider';
import Aux from '../../hoc/Auxi';

class SliderBuilder extends Component {
  slickPrev = () => {
    
  }
  render() {
    return (
      <Aux>
        <button onClick={this.slickPrev}>좌</button>
        <button onClick={this.slickNext}>우</button>
        <SingleSlider arrows={false}/>
        <SingleSlider arrows={false}/>
        <SingleSlider arrows={false}/>
      </Aux>
    );
  }
}

export default SliderBuilder;