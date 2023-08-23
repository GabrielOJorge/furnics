import { MenuBtn } from './MenuBtn';
import { NavLinks } from './NavLinks';
import { NavBtns } from './NavBtn';

export function HeaderNav() {
  return (
    <nav className="header-menu">
      <MenuBtn />
      <NavLinks />
      <NavBtns />
    </nav>
  );
}
