import React from 'react';
import Photolist from 'Photolist';

function Modal(props) {

    return (
      <div className="modalBackdrop">

  <div className="modalContainer ui modal">
    <div className="ui header">
    <h3 className="modalTitle">{Photos}</h3>
    </div>
    <button type="button" >
      X
    </button>
    <img src={props.src} alt="current category" />
    <div className="description">
      <div className="ui header">We've auto-chosen a profile image for you.</div>
      <p>We've grabbed the following image from the <a href="https://arcanaut.github.io/Portfolio/" rel="noreferrer" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
    <button type="button">
      <a >
      Repository
      </a>
    </button>
    <button type="button">
    <a href="https://arcanaut.github.io/Portfolio/" rel="noreferrer" target="_blank">
      Deployed Application
      </a>
    </button>
  </div>
</div>
</div>
    );
}

export default Modal;