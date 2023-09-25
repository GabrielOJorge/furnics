import { MenuBtn } from './MenuBtn';
import { NavLinks } from './NavLinks';
import { NavBtn } from './NavBtn';

export function HeaderNav() {
  return (
    <nav className="header-menu">
      <MenuBtn />
      <NavLinks />
      <NavBtn />
    </nav>
  );
}
