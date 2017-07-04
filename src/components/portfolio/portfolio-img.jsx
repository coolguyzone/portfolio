import React from 'react';

const PortfolioIMG = (props) => (
  <div className="col-sm-4">
    <div className="portfolio-img" style={props.stile}>
      <div>
        <h2>levelwater.io</h2>
        <p>A Full-stack app to help small water systems manage their infrastructure and set water rates.</p>
        <p>Main tech used: React, Redux, Express, Node, C3</p>
      </div>
    </div>
    {/* <img src={props.url} /> */}
  </div>
);

export default PortfolioIMG;
