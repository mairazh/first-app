import './Login.css';
import React, { useState } from "react";
import PropTypes from 'prop-types';

const Login = ({setToken}) => {

    const handleSubmit = async e => {
        e.preventDefault();
        sessionStorage.setItem('token', 'test');
        window.location.reload();
      }

    return (
        <div className="formItem">
            <form onSubmit={handleSubmit}>
                <div className="info">
                    <input type="email" placeholder="   Enter an email" required  />
                    <input type="text" placeholder="    Create a password" required  />
                </div>

                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;