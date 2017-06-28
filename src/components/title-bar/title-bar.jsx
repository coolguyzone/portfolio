import React from 'react';
import styles from './title-bar.css';

const TitleBar = (props) => (
  <div className="row title-bar">
    <div className="title-bar-block col-sm-1 col-sm-offset-2">
    </div>
    <div className="title-bar-title col-sm-4">
      {props.title}
    </div>
  </div>
);

export default TitleBar;
