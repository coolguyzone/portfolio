import React from 'react';
import styles from './about.css';
import TitleBar from '../../title-bar/title-bar';
import AboutImage from './about-image';
import AboutText from './about-text';

const About = () => (
  <div id="About">
    <TitleBar title="About" />
    <div className="row">
      <AboutImage />
      <AboutText />
    </div>
    <TitleBar title="Skills" />
    <TitleBar title="Experience" />
  </div>
);

export default About;
