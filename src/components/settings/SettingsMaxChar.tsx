import '../../styles/settings/SettingsMaxChar.scss';

import { ChangeEvent } from 'react';

type SettingsMaxCharProps = {
  label: string;
  value: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SettingsMaxChar = ({
  label,
  value,
  handleChange,
}: SettingsMaxCharProps) => {
  return (
    <div className='settings-max-char'>
      <label htmlFor='simple-char-max'>{label} Response Max</label>
      <input
        type='number'
        id='simple-char-max'
        name='simpleCharMax'
        min='0'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SettingsMaxChar;
