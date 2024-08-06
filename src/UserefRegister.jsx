import React, { useRef, useState } from 'react';
import './UserefRegister.css';

const UserefRegister = () => {
    const usernameref = useRef();
    const emailref = useRef();
    const passwordref = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const DisplayUsername = () => {
        setUsername(usernameref.current.value);
    };
    const DisplayEmail = () => {
        setEmail(emailref.current.value);
    };
    const DisplayPassword = () => {
        setPassword(passwordref.current.value);
    };
    const FocusInput = () => {
        if (!usernameref.current.value) {
            usernameref.current.focus();
        } else if (!emailref.current.value) {
            emailref.current.focus();
        } else if (!passwordref.current.value) {
            passwordref.current.focus();
        }
    };

    return (
        <div className="maincontainer">
            <div className="main">
                <h2 className="heading">REGISTRATION</h2>
                <input className="box" type="text" name="username" placeholder="Username" ref={usernameref} onChange={DisplayUsername} />
                <input className="box" type="text" name="email" placeholder="Email" ref={emailref} onChange={DisplayEmail} />
                <input className="box" type="text" name="password" placeholder="Password" ref={passwordref} onChange={DisplayPassword} />
                <button onClick={FocusInput} className="button">Submit</button>
                <div>{username}</div>
                <div>{email}</div>
                <div>{password}</div>
            </div>
        </div>
    );
};

export default UserefRegister;
