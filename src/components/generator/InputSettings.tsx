import '../../styles/generator/InputSettings.scss';

import { useState, MouseEvent } from 'react';

// interface InputSettingsProps {}

//inputElement.valueAsNumber for number input

const InputSettings = ({ children }: React.PropsWithChildren) => {
  const [settingsVisible, setSettingVisible] = useState(false);
  const toggleSettings = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSettingVisible(!settingsVisible);
    if (event.target instanceof HTMLElement) {
      event.target.classList.toggle('btn__primary');
      event.target.classList.toggle('btn__secondary');
    }
  };
  return (
    <div>
      <button className='btn btn__primary' onClick={toggleSettings}>
        Settings
      </button>
      <div>{settingsVisible && children}</div>
    </div>
  );
};

export default InputSettings;
