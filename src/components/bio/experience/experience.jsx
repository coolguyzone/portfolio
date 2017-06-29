import React from 'react';
import styles from './experience.css';
import ExperienceItem from './experience-item';

const Experience = () => (
  <div id="experience">
    <div className="row">
      <div className="col-sm-2"></div>
      <ExperienceItem
         title="Technical Writer"
         dates="2017-present"
         company="Facebook"
         url="facebook.com"
       />
    </div>
  </div>
);

export default Experience;
