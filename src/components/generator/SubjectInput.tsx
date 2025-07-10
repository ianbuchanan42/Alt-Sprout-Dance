const SubjectInput = () => {
  return (
    <>
      <label htmlFor='subjects'>Subjects:</label>
      <input
        id='subjects'
        type='text'
        // @input="updateSubjects"
        // worth noting the llm seems to read subject from left to right
        placeholder='Enter subjects, comma-separated from left to right'
      />
    </>
  );
};

export default SubjectInput;
