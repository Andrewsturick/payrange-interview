import React from 'react';
import "./styles.css";

const AddIcon = (props) => (
    <span 
        className="plus-icon"
        onClick={props.onClick}
        style={{...props.styles}}
    >
        +
    </span>
);

export default AddIcon;