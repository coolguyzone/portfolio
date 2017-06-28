import React from 'react';
import About from './about/about';
import styles from './bio.css';
import TitleBar from '../title-bar/title-bar';

const Bio = () => (
  <div id="bio">
    <TitleBar title="About" />
    <About />
    <TitleBar title="Skills" />
    <TitleBar title="Experience" />
  </div>
);

export default Bio;
