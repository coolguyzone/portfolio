import React from 'react';

const ContactItem = (props) => (
  <div className="contact-item col-sm-5">
    <h3>{props.header}</h3>
    <a href={props.url} target="_blank"><p>{props.link}</p></a>
  </div>
);

export default ContactItem;
