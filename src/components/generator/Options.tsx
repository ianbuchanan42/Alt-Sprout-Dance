import { ChangeEvent } from 'react';

type OptionsProps = {
  label: string;
  selected: string;
  options: string[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Options = ({ label, selected, options, handleChange }: OptionsProps) => {
  return (
    <div className='target-audience-input'>
      <label htmlFor='audience'>{`${label}:`}</label>
      <select id='audience' value={selected} onChange={handleChange}>
        {options.map((value: string, idx: number) => (
          <option key={`${idx}-${value}`} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
