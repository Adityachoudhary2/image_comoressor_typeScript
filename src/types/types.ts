export interface CompressionStats {
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
}

export interface ImagePreviewProps {
  imageUrl: string | null;
  altText: string;
}