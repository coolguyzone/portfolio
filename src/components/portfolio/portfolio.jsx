import React from 'react';
import styles from './portfolio.css';
import TitleBar from '../title-bar/title-bar';
import PortfolioIMG from './portfolio-img';

const Portfolio = () => (
  <div id="portfolio">
    <TitleBar title="Portfolio" />
    <div className="row">
      <div id="portfolio-gallery" className="col-sm-10 col-sm-offset-1">
        <div className="row">
          <PortfolioIMG url={require('../../img/level-water.png')} />
          <PortfolioIMG url={require('../../img/lazy-bartender.png')} />
          <PortfolioIMG url={require('../../img/sup-seasonal.png')} />
          <PortfolioIMG url={require('../../img/what-do-we-eat.png')} />
          <PortfolioIMG url={require('../../img/chazz.png')} />
        </div>
      </div>
    </div>
  </div>

);

export default Portfolio;
