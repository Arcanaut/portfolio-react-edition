
import React, { useState } from 'react';
import './App.css';
import Modal from "./components/Modal/Modal"

function App() {
  const [openModal, setOpenModal ] = useState(false)
  return (
    <div className="App">
      <h1>Click to open modal</h1>
      <button className="openModalBtn" onClick={ () => {setOpenModal(true)}}>
      Open
      </button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
