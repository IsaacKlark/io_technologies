import React from 'react';
import {useLocation} from 'react-router-dom';

const LoggedIn = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name').toLowerCase().split('')
    .map((letter, index, array) => {
      if (index === 0 || array[index - 1] === ' ') {
        return letter.toUpperCase();
      } else {
        return letter;
      }
  }).join('');
    
  return (
    <section className="logged-in" >
      <h2 className="hi-name">
        {`Hi, ${name}`}
      </h2>
      <p className="sign-in">
        Please choice your project
      </p>
      <ul className="loggedin-ul">
        <li className="loggedin-li">
          <a href="#" className="list-a">
            Flirchi
          </a>
        </li>
        <li className="loggedin-li">
          <a href="#" className="list-a">
            io
          </a>
        </li>
        <li className="loggedin-li">
          <a href="#" className="list-a">
            company name
          </a>
        </li>
        <li className="loggedin-li">
          <a href="#" className="list-a">
            facenews.com
          </a>
        </li>
        <li className="loggedin-li">
          <a href="#" className="list-a">
            something other
          </a>
        </li>
        <li className="loggedin-li">
          <a href="#" className="list-a">
            ohter again
          </a>
        </li>
        <li className="loggedin-li">
          <a href="#" className="list-a">
            and again
          </a>
        </li>
        <li className="loggedin-li">
          <a href="#" className="list-a">
            one more item
          </a>
        </li>
      </ul>
    </section>
  )
}

export default LoggedIn;