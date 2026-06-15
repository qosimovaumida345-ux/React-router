import React from 'react';
import './Skeleton.css';

const Skeleton = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-box title-skeleton"></div>
      <div className="skeleton-box text-skeleton"></div>
      <div className="skeleton-box text-skeleton short"></div>
      <div className="skeleton-box image-skeleton"></div>
    </div>
  );
};

export default Skeleton;
