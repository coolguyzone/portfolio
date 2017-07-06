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
          <a href='http://levelwater.io' target='_blank'>
            <PortfolioIMG
              title="levelwater.io"
              description="A Full-stack app to help small water systems manage their infrastructure and set water rates."
              tech="Main tech used: React, Redux, Express, Node, C3"
              styles={{
                base: {
                  'background': "url('level-water.png')",
                },
                hover: {
                  opacity: '0',
                  ':hover': {
                    opacity: '1'
                  },
                }
              }}
            />
        </a>

        <a href='http://lazybartender.com' target='_blank'>
            <PortfolioIMG
              title="Lazy Bartender"
              description="A front-end app that provides users with cocktail recipes based on what they have on hand."
              tech="Main tech used: vanilla JavaScript, CSS, Animate.CSS"
              styles={{
                base: {
                  'background': "url('lazy-bartender.png')",
                },
                hover: {
                  opacity: '0',
                  ':hover': {
                    opacity: '1'
                  },
                }
              }}
              />
            </a>

            <a href='https://supseasonal.herokuapp.com' target='_blank'>
              <PortfolioIMG
                title="Sup Seasonal"
                description="A fully documented back-end API that let's users know what foods are in season and provides recipes featuring those foods."
                tech="Main tech used: Express, Node, Swagger, Knex, PostgresQL"
                styles={{
                  base: {
                    'background': "url('sup-seasonal.png')",
                  },
                  hover: {
                    opacity: '0',
                    ':hover': {
                      opacity: '1'
                    },
                  }
                }}
                />
              </a>

              <a href='http://whatdoweeat.com' target='_blank'>
                <PortfolioIMG
                  title="What Do We Eat"
                  description="A gamified app designed to help two people decide what type of cuisine they should have for dinner."
                  tech="Main tech used: vanilla JavaScript, CSS"
                  styles={{
                    base: {
                      'background': "url('what-do-we-eat.png')",
                    },
                    hover: {
                      opacity: '0',
                      ':hover': {
                        opacity: '1'
                      },
                    }
                  }}
                  />
                </a>

                <a href='http://chazz.herokuapp.com'target='_blank'>
                  <PortfolioIMG
                    title="chazz"
                    description="A React app that connects to a back-end API, which combines cheese and jazz music, because why not?"
                    tech="Main tech used: React, Redux"
                    url="http://levelwater.io"
                    styles={{
                      base: {
                        'background': "url('chazz.png')",
                      },
                      hover: {
                        opacity: '0',
                        ':hover': {
                          opacity: '1'
                        },
                      }
                    }}
                    />
                  </a>
        </div>
      </div>
    </div>
  </div>

);


export default Portfolio;
