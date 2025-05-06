import '../styles/Home.scss';

const Home = () => {
  // eventually bring down user via redux
  // explore mapStateToProps for different components
  // this means we will have state wrappers using wrapper = connect(mapStateToProps)(component)

  return (
    <div className='home-page'>
      <section className='welcome-message'>
        <h2>Welcome to Alt Sprout Dance!</h2>
        <p className='intro'>
          Alt Sprout Dance is an <b>AI-powered</b> alt text generator designed
          to create meaningful and accessible image descriptions. Developed in
          collaboration with{' '}
          <a href='https://www.smuinballet.org/'>Smuin Contemporary Ballet</a>,
          it enhances the quality and efficiency of content creation for
          visually rich platforms.
        </p>
      </section>
      <section id='info'>
        <article className='info-box'>
          <h3>How It Works</h3>
          <ul className='info-content'>
            <li>
              <strong>1.</strong> Log in with your Google account
            </li>
            <li>
              <strong>2.</strong> Upload a dance image
            </li>
            <li>
              <figure className='demo-figure'>
                <img
                  className='demo-image'
                  src='https://afziltusqfvlckjbgkil.supabase.co/storage/v1/object/sign/assets/maggie-carey.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvbWFnZ2llLWNhcmV5LnBuZyIsImlhdCI6MTc0NTYyNjI1NywiZXhwIjoxODQwMjM0MjU3fQ.nikytWIXEZRIggEiJA5F3y0BbHtF-xk6qKke2VQDCVg'
                  alt='Ballet dancer Maggie Carey strikes a dynamic pose, wearing a deep burgundy costume against a soft purple background, embodying elegance and strength.'
                />
                <figcaption className='photo-credit'>
                  Photo Credit: Maximillian Tortoriello
                </figcaption>
              </figure>
            </li>
            <li>
              <strong>3.</strong> Provide subject details: "Maggie Carey"
            </li>
            <li>
              <strong>4.</strong> Select target audience: "Ballet Lovers"
            </li>
            <li>
              <strong>5.</strong> Submit to generate eloquent alt text!
            </li>
          </ul>
          <h3>Output</h3>

          <p className='info-content'>
            <b>Simple Description:</b> "Ballet dancer Maggie Carey strikes a
            dynamic pose, wearing a deep burgundy costume against a soft purple
            background, embodying elegance and strength."
          </p>
          <p className='info-content'>
            <b>Complex Description:</b> "In this captivating image, Maggie
            Carey, a professional ballet dancer, showcases elegance and strength
            mid-pose against a backdrop of soft, vibrant purples. Her arms are
            extended gracefully overhead, framing her focused face that radiates
            determination. The delicate layers of her flowing costume swirl
            around her, emphasizing the fluidity of her movements. Gentle
            lighting casts intricate shadows on the backdrop, enhancing her
            poised silhouette. Maggie's passionate expression invites ballet
            lovers into the enchanting world of dance, reflecting the artistry
            and discipline inherent in ballet."
          </p>
        </article>
        <article className='info-box'>
          <h3>Why It Matters</h3>
          <p className='info-content'>
            Alt text is not just a descriptive add-on—it’s a powerful tool that
            drives <b>accessibility and SEO success</b>. Alt Sprout Dance
            leverages generative AI to streamline the alt text creation process,
            turning a once tedious task into a lively performance that elevates
            your digital content.
          </p>

          <h3>Alt Sprout Dance in action!</h3>
          <video
            className='info-content'
            controls={true}
            width='100%'
            height='auto'
            //name="Video Name"
          >
            <source src='https://afziltusqfvlckjbgkil.supabase.co/storage/v1/object/sign/assets/Screen%20Recording%202025-03-08%20at%206.04.46%20PM.mov?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvU2NyZWVuIFJlY29yZGluZyAyMDI1LTAzLTA4IGF0IDYuMDQuNDYgUE0ubW92IiwiaWF0IjoxNzQ2MTI3OTA2LCJleHAiOjE4NDA3MzU5MDZ9.DRdw4Nni1WUjL2G3QxWErolo8-sFsW_eCVmfBfLUFAM' />
          </video>
          <h3>Get Started</h3>
          <p>Start making that alt text dance!</p>
          <nav aria-label='Authentication'>
            <button className='btn btn-primary'>Login with Google</button>
          </nav>
        </article>
      </section>
    </div>
  );
};

export default Home;
