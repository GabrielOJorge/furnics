const handleBulletClick = (e) => {
  const inputID = e.currentTarget.id;
  const heroSection = document.querySelector('.hero-section');

  if (inputID === 'slider-image1') {
    heroSection.classList.add('bg-image1');
    heroSection.classList.remove('bg-image2');
    heroSection.classList.remove('bg-image3');
  } else if (inputID === 'slider-image2') {
    heroSection.classList.add('bg-image2');
    heroSection.classList.remove('bg-image1');
    heroSection.classList.remove('bg-image3');
  } else {
    heroSection.classList.add('bg-image3');
    heroSection.classList.remove('bg-image1');
    heroSection.classList.remove('bg-image2');
  }
};

export function HeroSection() {
  return (
    <section className="hero-section bg-image1">
      <h1>wooden table set</h1>

      <p>
        Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis
        proin in aliquam
        <br />
        et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec
        id rutrum mauris
        <br />
        commodo habitant amet quisque. Velit ornare pellentesque facilisi in
        odio nibh.
      </p>

      <button>
        shop now
        <iconify-icon icon="la:arrow-right"></iconify-icon>
      </button>

      <div className="bullets-wrapper">
        <div className="bullet">
          <label className="sr-only" htmlFor="slider-image1">
            Image 1
          </label>
          <input
            type="radio"
            name="bullet"
            id="slider-image1"
            onClick={handleBulletClick}
          />
        </div>

        <div className="bullet">
          <label className="sr-only" htmlFor="slider-image2">
            Image 2
          </label>
          <input
            type="radio"
            name="bullet"
            id="slider-image2"
            onClick={handleBulletClick}
          />
        </div>

        <div className="bullet">
          <label className="sr-only" htmlFor="slider-image3">
            Image 3
          </label>
          <input
            type="radio"
            name="bullet"
            id="slider-image3"
            onClick={handleBulletClick}
          />
        </div>
      </div>
    </section>
  );
}
