import '../styles/GeneratorForm.scss';

const GeneratorForm = ({ children }: React.PropsWithChildren) => {
  const isLoading = false;
  return (
    <form>
      <fieldset>
        <legend>Input Image Information</legend>
        {children}
        <div className='submit-container'>
          <button
            className='btn btn-primary'
            type='submit'
            disabled={isLoading}
          >
            Submit
          </button>
          {isLoading && <span className='loader'></span>}
        </div>
      </fieldset>
    </form>
  );
};

export default GeneratorForm;
