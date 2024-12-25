export const downloadImage = (imageUrl: string, fileName: string) => {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = `compressed_${fileName}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};