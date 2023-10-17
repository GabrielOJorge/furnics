import { FurnicsLogo } from '../FurnicsLogo';
import { NavBar } from './components';

import './main-header.css';

export function MainHeader() {
  return (
    <header className="main-header">
      <div>
        <FurnicsLogo />
        <NavBar />
      </div>
    </header>
  );
}
