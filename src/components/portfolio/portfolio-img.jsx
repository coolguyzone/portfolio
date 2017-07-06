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
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <p>{this.props.tech}</p>
          </div>
        </div>

        {/* <img src={props.url} /> */}
      </div>

    )

  }
}

export default Radium(PortfolioIMG);
