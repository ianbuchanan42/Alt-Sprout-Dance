import '../../styles/settings/SettingsCheckBox.scss';

type SettingsCheckboxProps = {
  label: string;
  checked: boolean;
  handleChange: () => void;
};

const SettingsCheckbox = ({
  label,
  checked,
  handleChange,
}: SettingsCheckboxProps) => {
  return (
    <div className='settings-checkbox'>
      <input
        type='checkbox'
        id='simple-response'
        name='simpleResponseOn'
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor='simple-response'>{label}</label>
    </div>
  );
};

export default SettingsCheckbox;
