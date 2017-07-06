import React, { Component } from 'react';
import Radium from 'radium';



class PortfolioIMG extends Component {

  render(props) {
    return (
      <div className="col-sm-4">
        <div className="portfolio-img" style={[this.props.styles.base]}
          key={this.props.key1}>
          <div style={[this.props.styles.hover]}
            key = {this.props.key2}>
            <h2>levelwater.io</h2>
            <p>A Full-stack app to help small water systems manage their infrastructure and set water rates.</p>
            <p>Main tech used: React, Redux, Express, Node, C3</p>
          </div>
        </div>
        {/* <img src={props.url} /> */}
      </div>
    )

  }
}

export default Radium(PortfolioIMG);
