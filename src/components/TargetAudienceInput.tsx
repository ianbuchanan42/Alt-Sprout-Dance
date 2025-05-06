const TargetAudienceInput = () => {
  return (
    <div className='target-audience-input'>
      <label htmlFor='audience'>Target Audience:</label>
      <select id='audience' v-model='localAudience'>
        <option value='Ballet Lovers'>Ballet Lovers</option>
        <option value='Dance Enthusiasts'>Dance Enthusiasts</option>
      </select>
    </div>
  );
};

export default TargetAudienceInput;
