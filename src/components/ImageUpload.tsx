// do we need to be checking the images for security reasons?
// we will need to implement a size reducer or notify what size images are too large

// React.FC<ImageUploadProps>

// Makes it explicit this is a React function component, and ties in the children prop if you ever need it.

// React.Dispatch<React.SetStateAction<…>>

// If you’re passing your setX functions straight from useState, this is the exact built-in type.

// Remove the cast

// e: React.ChangeEvent<HTMLInputElement> already guarantees that e.target is an HTMLInputElement.

// Handler return type

// Annotating your handler as : void ensures you don’t accidentally return something you didn’t mean to.

import React from 'react';

type ImageUploadProps = {
  // if these are coming straight from useState, you can use the built-in Dispatch type:
  setImageUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  setImageUploading: React.Dispatch<React.SetStateAction<boolean>>;
};

// 1) Explicitly annotate the component signature
const ImageUpload: React.FC<ImageUploadProps> = ({
  setImageUrl,
  setImageUploading,
}) => {
  // 2) Give the handler a return type
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImageUploading(true);

    // 3) No need for a cast—e.target is already HTMLInputElement
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }

    setImageUploading(false);
  };

  return (
    <div className='image-upload'>
      <label htmlFor='image-upload'>Image Input:</label>
      <input
        id='image-upload'
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
        className='custom-file-input'
      />
    </div>
  );
};

export default ImageUpload;
