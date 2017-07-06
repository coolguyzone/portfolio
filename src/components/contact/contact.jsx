import React from 'react';
import styles from './contact.css';
import TitleBar from '../title-bar/title-bar';
import ContactItem from './contact-item';

const Contact = () => (
  <div id="contact">
    <TitleBar title="Contact" />
    <div className="row" style={{marginTop: '60px'}}>
      <div className="col-sm-1"></div>
      <div className="col-sm-10">
        <div className="row">

          <ContactItem
            header="E-Mail"
            url="mailto:alexanderkrawiec@gmail.com"
            link="alexanderkrawiec@gmail.com"
          />

          <ContactItem
            header="LinkedIn"
            url="http://linkedin.com/in/akrawiec"
            link="linkedin.com/in/akrawiec"
          />
        </div>

        <div className="row" style={{marginTop: '60px'}}>
          <ContactItem
            header="GitHub"
            url="http://github.com/coolguyzone"
            link="github.com/coolguyzone"
          />
          <ContactItem
            header="Facebook"
            url="http://facebook.com/endlessbummer"
            link="facebook.com/endlessbummer"
          />
        </div>


        </div>
      </div>


  </div>
);

export default Contact;
