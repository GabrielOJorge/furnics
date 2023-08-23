import { FurnicsLogo } from '../FurnicsLogo';
import { HeaderNav } from './HeaderNav';

export function MainHeader() {
  return (
    <header className="main-header">
      <div>
        <FurnicsLogo />
        <HeaderNav />
      </div>
    </header>
  );
}
