import React from 'react';
import "./styles.css";
import DeleteIcon from '../DeleteIcon';

const Machine = ({machine, onDelete}) => (
    <li className="machine" key={machine.id}>
        <h3 className="machine-id">{machine.id}</h3>
        <span className="machine-info">
            <h4 className="machine-label">{machine.label}</h4>
            <h5 className="machine-status">{machine.status}</h5>
        </span>
        <DeleteIcon onClick={() => onDelete(machine)} />
    </li>
);

export default Machine;