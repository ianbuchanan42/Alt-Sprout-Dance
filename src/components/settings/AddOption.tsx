import { ChangeEvent, MouseEvent } from 'react';

type AddOptionProps = {
  type: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const AddOption = ({
  type,
  value,
  handleChange,
  handleClick,
}: AddOptionProps) => {
  return (
    <div className='settings-add-audience'>
      <label htmlFor='audience-input'>{type}</label>
      <input
        type='text'
        id='audience-input'
        name=''
        value={value}
        onChange={handleChange}
      />
      <button className='btn btn__primary' onClick={handleClick}>
        Add {type}
      </button>
    </div>
  );
};

export default AddOption;
