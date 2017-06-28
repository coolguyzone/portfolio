import React from 'react';
import styles from './about.css';
import TitleBar from '../../title-bar/title-bar';
import AboutImage from './about-image';
import AboutText from './about-text';

const About = () => (
  <div id="about">
    <div className="row">
      <AboutImage />
      <AboutText />
    </div>
  </div>
);

export default About;
