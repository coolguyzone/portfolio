import React from 'react';

const ContactItem = (props) => (
  <a href={props.url} target="_blank">
  <div className="contact-item col-sm-5">
    <h3>{props.header}</h3>
    <p>{props.link}</p>
  </div>
  </a>
);

export default ContactItem;
