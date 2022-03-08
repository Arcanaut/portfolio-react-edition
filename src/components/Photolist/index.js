import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Game Grab',
      category: 'Front end',
      description: 'Grocery aisle',
    },
    {
      name: 'Taskmaster Pro Edition',
      category: 'Front end',
      description: 'Grocery booth',
    },
    {
      name: 'Workday Scheduler',
      category: 'Front end',
      description: 'building exterior',
    },
    {
      name: 'Git it Done',
      category: 'Front end',
      description: 'table at a restaurant',
    },
    {
      name: 'Run Buddy',
      category: 'Front end',
      description: 'The inside of a cafe',
    },
    {
      name: 'vFriend',
      category: 'Fullstack',
      description: 'cat with bright green eyes',
    },
    
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const toggleModal = (image, i) => {
    // current photo
  }
  return (
    <div>
      <Modal />
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
          src={require(`../../assets/${category}/${i}.jpg`)}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
        />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;