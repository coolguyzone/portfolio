import React from 'react';
import About from './about/about';
import Skills from './skills/skills';
import Experience from './experience/experience';
import styles from './bio.css';
import TitleBar from '../title-bar/title-bar';

const Bio = () => (
  <div id="bio">
    <TitleBar title="About" />
    <About />
    <TitleBar title="Skills" />
    <Skills />
    <TitleBar title="Experience" />
    <Experience />
  </div>
);

export default Bio;
