import { MenuBtn, NavLinks, NavBtn } from './components';

import './nav-bar.css';

export function NavBar() {
  return (
    <nav className="nav-bar">
      <MenuBtn />
      <NavLinks />
      <NavBtn />
    </nav>
  );
}
