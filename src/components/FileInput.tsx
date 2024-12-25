import React from 'react';

interface FileInputProps {
  onFileSelect: (file: File) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileSelect }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="file-input"
    />
  );
};

export default FileInput;