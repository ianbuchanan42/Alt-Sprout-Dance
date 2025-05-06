import '../styles/ImageInput.scss';
// import maggieImage from '../assets/maggie-carey.png';
import ImageUpload from './ImageUpload';
import ImageUrl from './ImageUrl';
import PreviewImage from './PreviewImage';
import ToggleImageInputType from './ToggleImageInput';
import { useState } from 'react';
// import SliderRange from './sliderRange';

const ImageInput = () => {
  const [isTypeUrl, setIsTypeUrl] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [imageUploading, setImageUploading] = useState(false);

  // might want to create event handlers that are declared in parent (here) instead of in components?

  return (
    <section className='image-input'>
      {isTypeUrl ? (
        <ImageUrl setImageUrl={setImageUrl} />
      ) : (
        <ImageUpload
          setImageUrl={setImageUrl}
          setImageUploading={setImageUploading}
        />
      )}
      <ToggleImageInputType setIsTypeUrl={setIsTypeUrl} isTypeUrl={isTypeUrl} />
      {/* <!-- Preview Image --> */}
      {imageUploading && <span className='loader'></span>}

      <PreviewImage src={imageUrl} />

      {/* add is Uploading... element and logic? */}
    </section>
  );
};

export default ImageInput;
