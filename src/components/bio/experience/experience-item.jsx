import React from 'react';

const ExperienceItem = (props) => (
  <div className="experience-item col-sm-6 col-xs-12">
    <div className="row">
      <div className="col-sm-2 col-xs-3 square-parent" >
        <div className="experience-square" style={{'background-color': props.bg}}></div>

      </div>
      <div className="experience-title col-sm-5 col-xs-5" style={{'color': props.color}}>
        <h3>{props.title}</h3>
        <p>{props.dates}</p>
      </div>
      <div className="experience-company col-sm-5 col-xs-4">
        <h3>{props.company}</h3>
        <p>{props.url}</p>
      </div>

    </div>

  </div>
);

export default ExperienceItem;
