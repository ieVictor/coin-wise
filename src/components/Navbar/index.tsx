import Logo from '@Components/Logo';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import SearchField from '@Components/SearchField';
import Favorites from '@Components/Favorites';
import SignOutButton from '@athoms/SignOut';

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <NavLink to="/" end>
        <Logo />
      </NavLink>
      <nav className={styles.asideWrapper}>
        <ul>
          <li>
            <NavLink to="/">Coins</NavLink>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <SearchField />
          </li>
          <li>
            <Favorites />
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
