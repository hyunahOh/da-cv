import React from 'react';
import './Layout.css';

const layout = (props) => (
  <React.Fragment>
    <div className="wrapper">
      {props.children}
    </div>
  </React.Fragment>
);

export default layout;