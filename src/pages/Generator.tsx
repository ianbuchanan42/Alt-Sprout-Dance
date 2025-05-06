import GeneratorForm from '../components/GeneratorForm';
import ImageInput from '../components/ImageInput';
import SubjectInput from '../components/SubjectInput';
import TargetAudienceInput from '../components/TargetAudienceInput';
import ResponseDisplay from '../components/ResponseDisplay';
import { useState } from 'react';
import InputSettings from '../components/InputSettings';

// change to dashboard hydrated by redux dashboard slice

const Generator = () => {
  //const [isLoading, setIsLoading] = useState();

  const [toggleInputOutput, setToggleInputOutput] = useState(true);
  return (
    <div>
      <h2>Alt Text Generator</h2>
      {toggleInputOutput ? (
        <GeneratorForm>
          <ImageInput />
          <SubjectInput />
          <InputSettings>
            <TargetAudienceInput />
          </InputSettings>
        </GeneratorForm>
      ) : (
        <ResponseDisplay />
      )}

      {/* // toggle input or result  */}
      <div className='button-container'>
        <button
          className='btn btn-primary'
          onClick={() => setToggleInputOutput(!toggleInputOutput)}
        >
          Edit Input
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setToggleInputOutput(!toggleInputOutput)}
        >
          View Results
        </button>
        <button className='btn btn-primary'>Reset</button>
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
