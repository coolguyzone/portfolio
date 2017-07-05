import React, { Component } from 'react';
import styles from './portfolio.css';
import TitleBar from '../title-bar/title-bar';
import PortfolioIMG from './portfolio-img';
import Radium from 'radium';



const Portfolio = () => (
  <div id="portfolio">
    <TitleBar title="Portfolio" />
    <div className="row">
      <div id="portfolio-gallery" className="col-sm-10 col-sm-offset-1">
        <div className="row">
          <PortfolioIMG
            //  url={require('../../img/level-water.png')}
            // stile={{background: "url('level-water.png')"}}
            styles={{
              base: {
                'background-color': 'green',
                ':hover': {
                  'background-color': 'red'
                }
              }

            }}
         />


        </div>
      </div>
    </div>
  </div>

);


export default Portfolio;
