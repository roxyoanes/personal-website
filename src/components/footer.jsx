import React from "react"

import StyledFooter from "./styled-components/styled-footer";

const Footer = () => (
  <StyledFooter>
    <div className="contact">
      <h3 className="title">Get In Touch</h3>
      <div className="form-wrapper">
        <form className="send-wrapper">
          <input type="text" className="form" id="name" placeholder="Your Name" />
          <input type="text" className="form" id="name" placeholder="Email Address" />
          <textarea type="text" className="form textarea" id="name" placeholder="Message" />
        </form>
        <div className="btn-wrapper">
          <button type="button" className="send-btn">SEND</button>
        </div>
      </div>
    </div>
  </StyledFooter>
)

export default Footer;