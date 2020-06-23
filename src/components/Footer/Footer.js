import React from "react";
import "./styles.css";

const Footer = (props) => (
    <div className="footer" style={props.styles}>
        {props.children}
    </div>
);

export default Footer;
