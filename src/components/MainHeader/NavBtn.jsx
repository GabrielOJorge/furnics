export function NavBtns() {
  return (
    <div>
      <button>
        <iconify-icon icon="ion:search"></iconify-icon>
      </button>
      <a>
        <iconify-icon icon="ion:person"></iconify-icon>
      </a>
      <a className="cart">
        <iconify-icon icon="ion:cart"></iconify-icon>
        <span>(0)</span>
      </a>
    </div>
  );
}
