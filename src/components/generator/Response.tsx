type ResponseProps = {
  responseType: string;
  response: string;
};

const Response = ({ responseType, response }: ResponseProps) => {
  return (
    <div className='alt-text-section'>
      <h3>{responseType} Description:</h3>
      <p>{response}</p>
      <div className='actions'>
        <button
          className='btn btn__primary'
          //   @click="copyToClipboard(responseText.simple, 'simple')"
          //   @mouseleave="resetTooltip('simple')"
        >
          <span className='tooltip' v-if='tooltip.simple'>
            tooltip.simple
          </span>
          <span>Copied</span>
          <span>Copy Text</span>
        </button>
        <button className='btn btn__secondary'>Save Response</button>
      </div>
    </div>
  );
};

export default Response;
