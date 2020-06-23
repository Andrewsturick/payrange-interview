import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import "./styles.css";
import Machine from '../Machine';
import AddIcon from '../AddIcon';
import Footer from "../Footer";
import Header from "../Header";

const GET_MACHINES_URL = "http://andrewsturick.payrange.interview.backend.ngrok.io/machines";

const getNewMachine = (id) => {
    return {
        id: id.toString(),
        status: "Busy",
        label: `Machine ${id}`
    };
};

const formatCurrency = balance => `$${balance.toFixed(2)}`;

const Machines = () => {
    //hooks
    const [machines, setMachines] = useState([]);
    const [balance, setBalance] = useState(30);

    //side-effects
    useEffect(() => {
    const fetchMachines = async () => {
        try {
        const {data} = await Axios.get(GET_MACHINES_URL);
        if (data && data.success) {
            setMachines(data.machines);
        }
        } catch(e) {
        throw new Error("Error loading machines");
        }
    };

    fetchMachines();
    }, []);
    

    //handlers
    const handleDeleteMachine = ({id}) => {
        return setMachines(machines.filter(machine => machine.id !== id));
    };

    const handleAddMachine = () => {
        if (!machines.length) return setMachines([ getNewMachine(1) ]);
        
        const lastMachine = machines[machines.length - 1];
        const lastMachineId = lastMachine.id;
        const newMachineId = parseInt(lastMachineId) + 1;
        const newMachines = machines.concat( [getNewMachine(newMachineId)] );
        
        return setMachines(newMachines);
    };

    const handleIncreaseBalance = () => {
        return setBalance(balance + 5);
    };

    return (
        <div className="machines-container">
            <Header>
                <h3>Select a machine</h3>
                <AddIcon onClick={handleAddMachine}/>
            </Header>
            <ul className="machines">
            {
                machines.map((machine) => (
                    <Machine
                        key={machine.id}
                        machine={machine}
                        onDelete={handleDeleteMachine}
                    />
                ))
            }
            </ul>
            <Footer>
                <span className="footer-text">
                    Balance: {formatCurrency(balance)}
                </span>
                <AddIcon
                    onClick={handleIncreaseBalance}
                    styles={{alignSelf: "center"}} />
            </Footer>
        </div>
    );
}

export default Machines;