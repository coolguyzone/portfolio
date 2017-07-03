import React from 'react';
import styles from './experience.css';
import ExperienceItem from './experience-item';



const Experience = () => (
  <div id="experience">
    <div className="row">
      <div className="col-sm-1"></div>
      <ExperienceItem
         title="Technical Writer"
         dates="May 2017-present"
         company="Facebook"
         url="facebook.com"
         bg = '#A0DCFF'
         color='#A0DCFF'
       />
       <ExperienceItem
         title="WDI Fellow"
         dates="Jan 2017-May 2017"
         company="Galvanize"
         url="galvanize.com"
         bg = '#17D9A5'
         color = '#17D9A5'
       />
    </div>
    <div className="row">
      <div className="col-sm-1"></div>
      <ExperienceItem
         title="Content Manager"
         dates="Feb 2013-Dec 2016"
         company="MyLikes"
         url="mylikes.com"
         bg = '#DB6F14'
         color='#DB6F14'
       />
       <ExperienceItem
          title="SEO Project Manager"
          dates="Dec 2010-Dec 2012"
          company="Phase One Accelerator"
          url="defunct"
          bg = '#A0DCFF'
          color='#A0DCFF'
        />
    </div>
  </div>
);

export default Experience;
