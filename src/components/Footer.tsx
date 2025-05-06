import '../styles/Footer.scss';
import gitHubIcon from '../assets/github-icon.svg';

const Footer = () => {
  return (
    <footer>
      <a
        id='gitHubAnchor'
        href='https://github.com/Taz-AiAccessibility/Alt-Sprout-Vue-Koa'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Checkout the A11y Sprout on GitHub'
      >
        <span className='icon-text'>Checkout Alt Sprout on GitHub</span>
        <img id='gitHubIcon' src={gitHubIcon} alt='GitHub Icon' />
      </a>
      {/* <a :href="`${BACKEND_URL}/terms-of-service`">Terms of Service</a> |
    <a :href="`${BACKEND_URL}/privacy-policy`">Privacy Policy</a> */}
    </footer>
  );
};

export default Footer;
