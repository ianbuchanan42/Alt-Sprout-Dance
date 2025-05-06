import '../styles/ResponseDisplay.scss';

const ResponseDisplay = () => {
  return (
    <div className='response-display'>
      <h2>responseType</h2>

      {/* <!-- Simple Description --> */}
      <div className='alt-text-section'>
        <h3>Simple Description:</h3>
        <p>
          Maggie Carey as a female ballet dancer in an arabesque, supported by a
          male dancer in a blue backdrop.
        </p>
        <div className='actions'>
          <button
            className='btn btn-primary'
            //   @click="copyToClipboard(responseText.simple, 'simple')"
            //   @mouseleave="resetTooltip('simple')"
          >
            <span className='tooltip' v-if='tooltip.simple'>
              tooltip.simple
            </span>
            <span>Copied</span>
            <span>Copy Text</span>
          </button>
          <button className='btn btn-secondary'>Save Response</button>
        </div>
      </div>

      {/* <!-- Complex Description --> */}
      <div className='alt-text-section'>
        <h3>Complex Description:</h3>
        <p>
          In this mesmerizing image featuring ballet dancers Maggie Carey and
          her partner, Maggie extends one leg in a graceful arabesque while
          being supported by her male counterpart. Their sleek costumes
          highlight their athleticism: Maggie wears a delicate fitted bodysuit,
          while her partner sports a white top with subtle lines. Their
          expressions reveal a profound emotional connection; Maggie gazes
          upward with determination, while her partner admires her with focus.
          The deep blue gradient backdrop enhances the serene ambiance,
          capturing the essence of ballet's beauty and lyricism.
        </p>
        <div className='actions'>
          <button
            className='btn btn-primary'
            //   @click="copyToClipboard(responseText.complex, 'complex')"
            //   @mouseleave="resetTooltip('complex')"
          >
            <span className='tooltip'>tooltip.complex</span>
            <span v-if='copied.complex'>Copied</span>
            <span v-else>Copy Text</span>
          </button>
          <button className='btn btn-secondary'>Save Response</button>
        </div>
      </div>
    </div>
  );
};

export default ResponseDisplay;
