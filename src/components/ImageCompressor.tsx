import React, { useState } from 'react';
import FileInput from './FileInput';
import ImagePreview from './ImagePreview';
import CompressionStats from './CompressionStats';
import DownloadButton from './DownloadButton';
import { compressImage } from '../utils/compression';
import { CompressionStats as Stats } from '../types/types';

const ImageCompressor: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileSelect = async (file: File) => {
    const originalUrl = URL.createObjectURL(file);
    setOriginalImage(originalUrl);
    setFileName(file.name);

    try {
      const compressedFile = await compressImage(file);
      const compressedUrl = URL.createObjectURL(compressedFile);
      setCompressedImage(compressedUrl);

      setStats({
        originalSize: file.size,
        compressedSize: compressedFile.size,
        compressionRatio: file.size / compressedFile.size
      });
    } catch (error) {
      console.error('Compression failed:', error);
    }
  };

  return (
    <div className="image-compressor">
      <FileInput onFileSelect={handleFileSelect} />
      <div className="previews">
        {originalImage && (
          <div>
            <h3>Original</h3>
            <ImagePreview imageUrl={originalImage} altText="Original" />
          </div>
        )}
        {compressedImage && (
          <div>
            <h3>Compressed</h3>
            <ImagePreview imageUrl={compressedImage} altText="Compressed" />
            <DownloadButton imageUrl={compressedImage} fileName={fileName} />
          </div>
        )}
      </div>
      {stats && <CompressionStats stats={stats} />}
    </div>
  );
};

export default ImageCompressor;