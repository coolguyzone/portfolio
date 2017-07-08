import React from 'react';
import styles from './heading.css';
import HeadingText from './heading-text';
import HeadingButton from './heading-button';
import HeadingMobileText from './heading-mobile-text';

const Heading = () => (
  <div id="heading">
    <HeadingMobileText />
    <HeadingText />
    <HeadingButton />
  </div>
)

export default Heading;
