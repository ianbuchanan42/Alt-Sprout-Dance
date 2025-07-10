import { ChangeEvent } from 'react';

type OptionsProps = {
  selected: string;
  options: string[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Options = ({ selected, options, handleChange }: OptionsProps) => {
  console.log({ selected });

  return (
    <div role='radiogroup' aria-labelledby='default-audience-label'>
      <label htmlFor='audience-select'>Default value:</label>

      <select id='audience-select' value={selected} onChange={handleChange}>
        {options.map((audience, idx) => (
          <option key={`${idx}-${audience}`} value={audience}>
            {audience}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
