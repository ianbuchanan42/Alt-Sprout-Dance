import GeneratorForm from '../components/generator/GeneratorForm';
import ImageInput from '../components/generator/ImageInput';
import SubjectInput from '../components/generator/SubjectInput';
import Options from '../components/generator/Options';
import ResponseDisplay from '../components/generator/ResponseDisplay';
import { ChangeEvent, useState } from 'react';
import InputSettings from '../components/generator/InputSettings';
import {
  selectDefaultAudience,
  selectDefaultDanceType,
  selectTargetAudienceOptions,
  selectTargetDanceTypes,
} from '../store/slices/dashboardSlice';
import { useAppSelector } from '../store/hooks';

// change to dashboard hydrated by redux dashboard slice

const Generator = () => {
  //const [isLoading, setIsLoading] = useState();

  const audienceOptions = useAppSelector(selectTargetAudienceOptions);

  const [selectedAudience, setSelectedAudience] = useState(
    useAppSelector(selectDefaultAudience)
  );

  const danceTypes = useAppSelector(selectTargetDanceTypes);

  const [selectedDanceType, setSelectedDanceType] = useState(
    useAppSelector(selectDefaultDanceType)
  );

  const handleAudienceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedAudience(value);
  };

  const handleDanceTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedDanceType(value);
  };

  const [toggleInputOutput, setToggleInputOutput] = useState(true);
  return (
    <div>
      <h2>Alt Text Generator</h2>
      {toggleInputOutput ? (
        <GeneratorForm>
          <ImageInput />
          <SubjectInput />
          <InputSettings>
            <Options
              label='Targe Audience'
              options={audienceOptions}
              selected={selectedAudience}
              handleChange={handleAudienceChange}
            />
            <Options
              label='Target Dance Style'
              options={danceTypes}
              selected={selectedDanceType}
              handleChange={handleDanceTypeChange}
            />
          </InputSettings>
        </GeneratorForm>
      ) : (
        <ResponseDisplay />
      )}

      {/* // toggle input or result  */}
      <div className='button-container'>
        <button
          className='btn btn__primary'
          onClick={() => setToggleInputOutput(!toggleInputOutput)}
        >
          Edit Input
        </button>
        <button
          className='btn btn__primary'
          onClick={() => setToggleInputOutput(!toggleInputOutput)}
        >
          View Results
        </button>
        <button className='btn btn__primary'>Reset</button>
      </div>
    </div>
  );
};

export default Generator;

// Key Features
// Actions:
// Functions passed to the action prop of a <form> element. They handle form submissions and data processing, replacing the traditional onSubmit event handler. Actions can be used in both server and client components. When used in server components, the function logic remains on the server, reducing client-side JavaScript and improving security.
// useActionState:
// A hook that manages the state of an action, providing information about pending states, errors, and the result of the action. It takes an action function and an initial state as arguments and returns an updated action and the current state.
// useFormStatus:
// A hook that provides information about the status of the form submission, such as whether it is pending.
// Benefits
// Simplified Form Handling:
// Actions eliminate the need for manual event handling (e.preventDefault()) and form resetting, as React handles these automatically.
// Improved Asynchronous Operations:
// Actions facilitate asynchronous tasks like API calls, automatically managing pending states, optimistic updates, and error handling.
// Enhanced Performance and Security:
// By allowing form logic to run on the server, Actions reduce client-side code, improve security, and enable forms to function even with JavaScript disabled.
// Example
// Code

// import React from 'react';
// import { useActionState } from 'react';

// async function submitForm(prevState, formData) {
//   // Simulate an API call
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   const name = formData.get('name');
//   if (name === 'error') {
//     return { message: 'Name cannot be error' };
//   }
//   return { message: `Hello, ${name}!` };
// }

// function MyForm() {
//   const [state, formAction] = useActionState(submitForm, null);

//   return (
//     <form action={formAction}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" required />
//       <button type="submit">Submit</button>
//       {state?.message && <p>{state.message}</p>}
//     </form>
//   );
// }

// export default MyForm;
