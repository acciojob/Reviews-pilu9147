import React, { useState } from 'react';
import reviewsData from './reviewsData';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { name, job, image, text, id } = reviewsData[currentIndex];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const handleRandomClick = () => {
    let randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * reviewsData.length);
    }
    setCurrentIndex(randomIndex);
  };

  return (
    <div>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <div className="person-img">
          <img src={image} alt={name} />
        </div>
        <h4 id={`author-id-${id}`} className="name">
          {name}
        </h4>
        <p className="job">{job}</p>
        <p className="text">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={handlePrevClick}>
            Prev
          </button>
          <button className="next-btn" onClick={handleNextClick}>
            Next
          </button>
          <button className="random-btn" onClick={handleRandomClick}>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;