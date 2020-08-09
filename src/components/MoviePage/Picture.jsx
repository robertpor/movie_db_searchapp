import React from 'react';

const Picture = (props) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500/' + props.url;

  return (
    <div>
      <img src={imagePath} alt='Movie Backdrop' />
    </div>
  );
};

export default Picture;
