import React from "react";
import "./styles.css"

const Header = (props) => (
    <div className="header">{props.children}</div>
);

export default Header;