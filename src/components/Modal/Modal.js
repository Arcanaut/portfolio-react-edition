import React from 'react';
import style from './style.css'

function Modal({closeModal}){
  return(
    <div className='modalBackground'>
      <div className='modalContainer'>
          <div className='modalCloseBtn'>
            <button onClick={() => closeModal(false)}> X 
            </button>
        </div>
        <div className='modalTitle'>
                    <h1>Title holder</h1>
        </div>
        <div className='modalBody'>
                    <p>lorem ipsum</p>
        </div>
        <div className='modalFooter'>
          <button>Repository</button>
          <button>Deployed</button>
          </div>
      </div>
    </div>
  )
}





export default Modal;