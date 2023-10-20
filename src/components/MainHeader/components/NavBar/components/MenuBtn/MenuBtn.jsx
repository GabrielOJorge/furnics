import './menu-btn.css';

const handleMenuBtnClick = () => {
  const headerMenu = document.querySelector('.nav-bar');
  const menuBtn = document.querySelector('.menu-btn');

  headerMenu.classList.toggle('active');
  menuBtn.classList.toggle('active');
};

export function MenuBtn() {
  return (
    <button className="menu-btn" onClick={handleMenuBtnClick}>
      <iconify-icon className="open" icon="ic:baseline-menu"></iconify-icon>
      <iconify-icon icon="ic:baseline-close"></iconify-icon>
    </button>
  );
}
