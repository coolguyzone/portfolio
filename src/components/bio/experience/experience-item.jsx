import React from 'react';

const ExperienceItem = (props) => (
  <div className="experience-item">
    <div className="experience-square col-sm-1"></div>
    <div className="experience-title col-sm-2">
      <h3>{props.title}</h3>
      <p>{props.dates}</p>
    </div>
    <div className="experience-company col-sm-3">
      <h3>{props.company}</h3>
      <p>{props.url}</p>
    </div>
  </div>
);

export default ExperienceItem;
