import './Login.css';
import React, { useState } from "react";

const Register = (props) => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [password, setPassword] = useState(null);

const handleSubmit = (event) => {

        const {id, value} = event.target;

        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "phoneNumber") {
            setPhoneNumber(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    }

    const handleSubmitForm = () => {
        console.log(firstName, lastName, email, phoneNumber);
    }


    return (
        <div className="formItem">
            <form>
                <div className="info">
                    <input type="text" id="firstName" placeholder="   Enter a first name" required value={firstName} onChange={(e) => handleSubmit(e)} />
                    <input type="text" id="lastName" placeholder="   Enter a last name" required value={lastName} onChange={(e) => handleSubmit(e)} />
                    <input type="email"id="email"  placeholder="   Enter an email" required value={email} onChange={(e) => handleSubmit(e)} />
                    <input type="text" id="phoneNumber" placeholder="    Enter a phone number" required value={phoneNumber} onChange={(e) => handleSubmit(e)} />
                    <input type="text" id="password" placeholder="    Create a password" required value={password} onChange={(e) => handleSubmit(e)} />
                </div>

                <div className="btn">
                    <input type="submit" value="Submit" onClick={() => handleSubmitForm()}/>
                </div>
            </form>

        </div>
    );
}

export default Register;