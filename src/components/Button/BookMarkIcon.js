import React from 'react';

const BookMarkIcon = ({ fillColor = '#2F2F2F', pathFill }) => {
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill={fillColor} cx="28" cy="28" r="28" />
        <path fill={pathFill} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
};

export default BookMarkIcon;
