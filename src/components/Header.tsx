import '../styles/Header.scss';
import logo from '../assets/alt_sprout_dance_icon.png';
import Navbar from './Navbar';
import { useAppSelector } from '../store/hooks';
import { selectUser } from '../store/slices/userSlice';
import ianBuchananAvatar from '../assets/ian-buchanan-avatar.png';

const Header = () => {
  const user = useAppSelector(selectUser);

  return (
    <header id='main-header'>
      <Navbar />
      <h1>Alt Sprout Dance</h1>
      <div>
        {user.avatar_url && (
          <img
            id='avatar'
            className='header-icon'
            src={ianBuchananAvatar}
            aria-hidden='true'
          />
        )}
        <img id='logo' className='header-icon' src={logo} alt='logo' />
      </div>
    </header>
  );
};

export default Header;
