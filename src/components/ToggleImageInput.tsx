type ToggleImageInputTypeProps = {
  setIsTypeUrl: React.Dispatch<React.SetStateAction<boolean>>;
  isTypeUrl: boolean;
};

const ToggleImageInputType = ({
  setIsTypeUrl,
  isTypeUrl,
}: ToggleImageInputTypeProps) => {
  // !!! might be better to pass this handler in from parent
  const handleOnChange = () => {
    setIsTypeUrl(!isTypeUrl);
  };
  return (
    <div id='toggle-input'>
      <label className='toggle-label'>
        <input type='checkbox' checked={isTypeUrl} onChange={handleOnChange} />
        Use Image URL instead of File Upload
      </label>
    </div>
  );
};

export default ToggleImageInputType;
