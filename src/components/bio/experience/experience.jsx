import React from 'react';
import styles from './experience.css';
import ExperienceItem from './experience-item';



const Experience = () => (
  <div id="experience">
    <div className="row">

      <div className="col-xs-10 col-xs-offset-1">
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
           bg = '#9AFFCC'
           color = '#9AFFCC'
         />
      </div>
    </div>

      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
        <ExperienceItem
           title="Content Manager"
           dates="Feb 2013-Dec 2016"
           company="MyLikes"
           url="mylikes.com"
           bg = '#A8AFFF'
           color='#A8AFFF'
         />
         <ExperienceItem
            title="SEO Project Manager"
            dates="Dec 2010-Dec 2012"
            company="Phase One Accelerator"
            url="defunct"
            bg = '#FFE49A'
            color='#FFE49A'
          />
      </div>
      </div>

  </div>
);

export default Experience;
