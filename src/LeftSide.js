import React, { useState } from 'react';

const LeftSide = () => {
  const [hide, setHide] = useState(true);

  const changeHide = () => {
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
  }

  return (
    <section className="help-info">
      <div className={hide===true ? 'hide-left': 'show-left'}>
        <p className="logo">
          Technologies
        </p>
        <h2 className="h2-help">
          Get how-to help and instructions or specific features in
        </h2>
        <div className="buttons-help"> 
          <button type="button" className="left-buttons">
            Help center
          </button>
            or
          <button type="button" className="left-buttons">
            Support
          </button>
        </div>
      </div>
      <button type="button" className="show-hide" onClick={changeHide}>
        {hide === true ? "=" : "x"}
      </button>
    </section>
  )}

  export default LeftSide;