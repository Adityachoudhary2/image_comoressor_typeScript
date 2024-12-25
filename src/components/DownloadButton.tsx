import React from 'react';
import { downloadImage } from '../utils/download';

interface DownloadButtonProps {
  imageUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ imageUrl, fileName }) => {
  const handleDownload = () => {
    downloadImage(imageUrl, fileName);
  };

  return (
    <button 
      onClick={handleDownload}
      className="download-button"
    >
      Download Compressed Image
    </button>
  );
};

export default DownloadButton;