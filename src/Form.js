import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Form = () => {
  const [filledEmail, setFilledEmail] = useState("");
  const [filledPassword, setFilledPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  
  const debounce = (f) => {
    let timer = "";
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => f(...args), 1000);
    }
  }
  
  const fillInput = (type, value) => {
    if (type === "email") {
      setFilledEmail(value);
    } else {
      setFilledPassword(value);
    }
  }
  
  const debounceFillInput = debounce(fillInput);

  const LogIn = () => {
    if (/.+@.+\..{2}.*/g.test(filledEmail) && filledPassword.length >= 8) {
      const fullname = filledEmail.match(/.+(?=@)/g).join('').split('.').join(' ');
      location.pathname = '/hi';
      history.location.pathname = '/hi';
      history.replace(location.pathname, '/hi');
      searchParams.set('name', fullname);
      history.push({search: searchParams.toString()});
    } else if (!/.+@.+\..{2}.*/g.test(filledEmail) && filledPassword.length < 8) {
      setFilledEmail(' ');
      setFilledPassword(' ')
    } else if (filledPassword.length < 8) {
      setFilledPassword(' ')
    } else if (!/.+@.+\..{2}.*/g.test(filledEmail)) {
      setFilledEmail(' ');
    } 
  }
  
  return (
    <form className="form">
    <h2 className="h2-form">
      Welcome back
    </h2>
    <p className="sign-in">
      Sign in to continue to IO technologies
    </p>
      <div className="input-wrapper">
        <input 
          type="email" 
          placeholder="Your email" 
          className={filledEmail === "" ? "input" : "input filled"}
          onChange={(e) => {debounceFillInput(e.target.type, e.target.value)}}
          pattern=".+@.+\..{2}.*"
          required
        />
        <p className="error-mesage">
          incorrect input
        </p>
      </div>
      <div className="input-wrapper">
        <input 
          type="password" 
          placeholder="Password" 
          className={filledPassword === "" ? "input" : "input filled"}
          onChange={(e) => {debounceFillInput(e.target.type, e.target.value)}}
          required
          minLength="8"
        />
        <p className="error-mesage">
          incorrect input
        </p>
      </div>
      <button type="button" className="log-in" onClick={LogIn}>
        log in
      </button>
      <div className="forgot-password">
        <p className="p-forgot">
          Forgot your password?
        </p>
        <Link to='/forgot/password' className="reset">
          Reset
        </Link>
      </div>
    </form>
  )}

  export default Form;