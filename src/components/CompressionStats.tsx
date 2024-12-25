import React from 'react';
import { CompressionStats as Stats } from '../types/types';
import { formatFileSize } from '../utils/format';

interface CompressionStatsProps {
  stats: Stats;
}

const CompressionStats: React.FC<CompressionStatsProps> = ({ stats }) => {
  return (
    <div className="compression-stats">
      <p>Original Size: {formatFileSize(stats.originalSize)}</p>
      <p>Compressed Size: {formatFileSize(stats.compressedSize)}</p>
      <p>Compression Ratio: {stats.compressionRatio.toFixed(2)}x</p>
    </div>
  );
};

export default CompressionStats;