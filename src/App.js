import React, { useState } from 'react';
import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';
import Modal from './components/Modal'


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Front End' },
    { name: 'Back End' },
    { name: 'Full Stack' },
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
  categories={categories}
  setCurrentCategory={setCurrentCategory}
  currentCategory={currentCategory}
  contactSelected={contactSelected}
  setContactSelected={setContactSelected}
></Nav>
      <main>
        <div>
    {/* <Gallery currentCategory={currentCategory}></Gallery> */}
    {/* <About></About> */}
    <Modal>Yosemite Mudflap</Modal>
 

        </div>
      </main>
    </div>
  );
}

export default App;