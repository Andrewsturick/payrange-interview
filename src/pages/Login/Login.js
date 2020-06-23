import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { isTokenValid } from '../../utils/auth';

//https://www.regular-expressions.info/email.html
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;
const FIFTEEN_MINUTES = 60 * 1000 * 15;

const mockLoginUser = async () => {
    return {token: "eyasdf.asdfa.dfdaf", expires: Date.now() + FIFTEEN_MINUTES};
};

const Login = () => {

    //hooks
    const {register, handleSubmit, errors } = useForm();
    const history = useHistory();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isTokenValid(localStorage.getItem("_session"))) {
            history.push("/")
        }
    }, []);
    
    
    //handlers
    const handleEmailChange = ({target}) => {
        setEmail(target.value);
    };
    
    const handlePasswordChange = ({target}) => {
        setPassword(target.value);
    };
    
    const handleLoginUser = async (data, errors) => {
        if (errors) {
            return;
        }

        const token = await mockLoginUser();
        localStorage.setItem("_session", JSON.stringify(token));
        
        history.push("/");
    };


    return (
        <form onSubmit={handleSubmit(handleLoginUser)}>
            <div>
                <input
                    name="email"
                    onChange={handleEmailChange}
                    placeholder="Email"
                    ref={register({required: true, pattern: EMAIL_REGEX})}
                    value={email}
                />
            </div>
            
            {
                errors.email &&
                <span>
                    Please enter a valid email
                </span>
            }
            <div>
                <input
                    name="password"
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    type="password"
                    ref={register({required: true})}
                    value={password}
                />
            {
                errors.password &&
                <span>
                    Please enter a password
                </span>
            }
            </div>
            <button onClick={handleLoginUser}>login!</button>
        </form>
    );
}

export default Login;