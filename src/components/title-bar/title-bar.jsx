import React from 'react';
import styles from './title-bar.css';

const TitleBar = (props) => (
  <div className="row title-bar">
    <div className="title-bar-block col-xs-1 col-xs-offset-1">
    </div>
    <div className="title-bar-title col-xs-4">
      {props.title}
    </div>
  </div>
);

export default TitleBar;
