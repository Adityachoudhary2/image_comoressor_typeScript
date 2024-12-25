import React from 'react';
import { ImagePreviewProps } from '../types/types';

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, altText }) => {
  if (!imageUrl) return null;

  return (
    <div className="image-preview">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default ImagePreview;