import React from 'react';
import styles from './skills.css';

const Skills = () => (
  <div className="row">
    <div className="col-sm-10 col-sm-offset-1">
      <div id="skills" className="row">
        <div id = "front-end-skills" className="col-sm-4">
          <h2>Front-End</h2>
          <p>JavaScript ES6, React, Redux, CSS, Sass, Git, Bootstrap, Materialize, jQuery</p>
        </div>
        <div id="back-end-skills" className="col-sm-4">
          <h2>Back-End</h2>
          <p>
            Node, Express, Postgres, Knex, Swagger, Knex, Redis, Cubrick, JSON
          </p>
        </div>
        <div id="misc-skills" className="col-sm-4">
          <h2>Misc</h2>
          <p>
            Technical Writing, Documentation, Adobe Photoshop, Basalmiq, Google Analytics, SEO
          </p>
        </div>
      </div>
    </div>

  </div>
);

export default Skills;
