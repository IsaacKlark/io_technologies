import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordRecovery = () => {
    const [filledEmail, setFilledEmail] = useState("");
    
    const debounce = (f) => {
      let timer = "";
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => f(...args), 1000);
      }
    }
    
    const fillInput = (value) => {
        setFilledEmail(value);
    }
    
    const debounceFillInput = debounce(fillInput);
    
    return (
      <form className="form" >
        <Link to="/" className="back-arrow">
        </Link>
      <h2 className="h2-form forgont-password">
        Forgot password?
      </h2>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className={
            filledEmail === "" 
            ? "input password-recovery" 
            : "input filled password-recovery"
          }
          onChange={(e) => {debounceFillInput( e.target.value)}}
          pattern=".+@.+\..{2}.*"
          required
        />
        <button type="button" className="Send-button">
          Send me insturctions
        </button>
      </form>
    )
}

export default PasswordRecovery;