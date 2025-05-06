type PreviewImageProps = {
  src: string | undefined;
};

const PreviewImage = ({ src }: PreviewImageProps) => {
  return (
    <div className='preview-container'>
      {src && (
        <img src={src} alt='Uploaded Preview' className='preview-image' />
      )}
    </div>
  );
};

export default PreviewImage;
