import React from 'react';
import Photolist from '../Photolist';

function Modal(props) {

    return (
      <div class="ui basic modal">
      <div class="ui icon header">
        {/* <h3 class="modalTitle"> {photos} </h3> */}
      </div>
      <div class="content">
        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
      </div>
      <div class="actions">
        <div class="ui red basic cancel inverted button">
          <a href="https://arcanaut.github.io/Portfolio/" rel="noreferer" target="_blank">
          No
        </a>
        </div>
        <div class="ui green ok inverted button">
          
          Repository
        </div>
      </div>
    </div>
    );
}

export default Modal;