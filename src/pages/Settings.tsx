import '../styles/Settings.scss';

import { useState, ChangeEvent, MouseEvent } from 'react';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  // Response Types
  selectSimpleResponseOn,
  selectComplexResponseOn,
  toggleSimpleResponse,
  toggleComplexResponse,
  // Character Limits
  selectSimpleCharMax,
  selectComplexCharMax,
  setSimpleCharMax,
  setComplexCharMax,
  // Dance Types
  setNewTargetDanceType,
  setDefaultDanceType,
  selectTargetDanceTypes,
  selectDefaultDanceType,
  // Audiences
  setNewTargetAudienceOption,
  selectTargetAudienceOptions,
  setDefaultAudience,
  selectDefaultAudience,
} from '../store/slices/dashboardSlice';
import SettingsCheckbox from '../components/settings/SettingsCheckbox';
import SettingsMaxChar from '../components/settings/SettingsMaxChar';
import AddOption from '../components/settings/AddOption';
import Options from '../components/settings/Options';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const simpleResponse = useAppSelector(selectSimpleResponseOn);
  const complexResponse = useAppSelector(selectComplexResponseOn);

  const handleToggleSimple = () => {
    if (complexResponse) {
      dispatch(toggleSimpleResponse());
    }
  };
  const handleToggleComplex = () => {
    if (simpleResponse) {
      dispatch(toggleComplexResponse());
    }
  };

  const simpleCharMax = useAppSelector(selectSimpleCharMax);
  const complexCharMax = useAppSelector(selectComplexCharMax);

  const handleSimpleCharMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const max = event.target.valueAsNumber;
    dispatch(setSimpleCharMax(max));
  };

  const handleComplexCharMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const max = event.target.valueAsNumber;
    dispatch(setComplexCharMax(max));
  };

  const [danceTypeValue, setDanceTypeValue] = useState('');

  const [audienceValue, setAudienceValue] = useState('');

  const handleDanceTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDanceTypeValue(event.target.value);
  };

  const handleAddDanceType = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(setNewTargetDanceType(danceTypeValue));
    setDanceTypeValue('');
  };

  const handleAudienceValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAudienceValue(event.target.value);
  };

  const handleAddAudience = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(setNewTargetAudienceOption(audienceValue));
    setAudienceValue('');
  };

  const audiences = useAppSelector(selectTargetAudienceOptions);

  const danceTypes = useAppSelector(selectTargetDanceTypes);

  const [selectedAudience, setSelectedAudience] = useState(
    useAppSelector(selectDefaultAudience)
  );

  const [selectedDanceType, setSelectedDanceType] = useState(
    useAppSelector(selectDefaultDanceType)
  );

  const handleDefaultAudienceChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    dispatch(setDefaultAudience(value));
    setSelectedAudience(value);
  };

  const handleDefaultDanceTypeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    dispatch(setDefaultDanceType(value));
    setSelectedDanceType(value);
  };

  return (
    <>
      <h2 id='settings-heading'>Settings</h2>
      <section aria-labelledby='settings-heading'>
        <form className='settings-form'>
          <fieldset>
            <legend>Response Types</legend>
            <SettingsCheckbox
              label='Enable Simple Response'
              checked={simpleResponse}
              handleChange={handleToggleSimple}
            />

            <SettingsCheckbox
              label='Enable Complex Response'
              checked={complexResponse}
              handleChange={handleToggleComplex}
            />
          </fieldset>
          <fieldset>
            <legend>Character Limits</legend>
            <SettingsMaxChar
              label='Simple'
              value={simpleCharMax}
              handleChange={handleSimpleCharMaxChange}
            />

            <SettingsMaxChar
              label='Complex'
              value={complexCharMax}
              handleChange={handleComplexCharMaxChange}
            />
          </fieldset>

          <fieldset>
            <legend>Update Target Dance Styles</legend>
            <AddOption
              type='Dance Style'
              value={danceTypeValue}
              handleChange={handleDanceTypeChange}
              handleClick={handleAddDanceType}
            />
            <Options
              selected={selectedDanceType}
              options={danceTypes}
              handleChange={handleDefaultDanceTypeChange}
            />
          </fieldset>

          <fieldset>
            <legend>Update Target Audiences</legend>
            <AddOption
              type='Audience'
              value={audienceValue}
              handleChange={handleAudienceValueChange}
              handleClick={handleAddAudience}
            />
            <Options
              selected={selectedAudience}
              options={audiences}
              handleChange={handleDefaultAudienceChange}
            />
          </fieldset>
          <div>
            <button className='btn btn__primary' type='reset'>
              Reset to Defaults
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Dashboard;
