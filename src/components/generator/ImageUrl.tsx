type ImageUrlProps = {
  setImageUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ImageUrl = ({ setImageUrl }: ImageUrlProps) => {
  const hadleImageUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setImageUrl(url);
  };
  return (
    <div className='input'>
      <label htmlFor='image-url'>Image Input:</label>
      <input
        id='image-url'
        type='text'
        placeholder='Paste an image URL'
        onChange={hadleImageUrl}
      />
    </div>
  );
};

export default ImageUrl;
