import React from 'react';
import './styles.css';

const DeleteIcon = (props) => (
    <span onClick={props.onClick} className="delete-icon">
        <img src="https://img.icons8.com/fluent/35/000000/minus.png"/>
    </span>
);

export default DeleteIcon;