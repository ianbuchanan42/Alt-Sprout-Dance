// Navbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';
// import { useAppSelector, useAppDispatch } from '../store/hooks';
// import { loggedIn, loggedOut, selectUser } from '../store/slices/userSlice';

export default function Navbar() {
  // const user = useAppSelector(selectUser);
  // const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      {/* [CHANGE] Hamburger toggle button */}
      <button
        className='navbar-toggle'
        aria-label='Toggle menu'
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls='navbar-menu'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </button>

      {/* would like to implement more apple style unfolding of the elements here */}

      {/* [CHANGE] Add .active class when open */}
      <ul id='navbar-menu' className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/generator' onClick={() => setIsOpen(false)}>
            Generator
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' onClick={() => setIsOpen(false)}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
