import '../../style/components/about-section.css';
import { CTABtn } from '../CTABtn';

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div>
        {/* <video
          src="src/assets/video.mp4"
          // width={760}
          autoPlay
          controls
        ></video> */}
        <img src="src/assets/images/slide-image3.png" alt="" />
        {/* <iconify-icon icon="ion:play-sharp"></iconify-icon> */}
      </div>

      <div>
        <h2>Since 1990&apos;s</h2>

        <p>
          Ac varius lectus tellus tellus quisque tristique aenean. Volutpat
          velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui vel
          egestas purus sed. Eget turpis tincidunt faucibus montes arcu in
          nullam tortor orci. Nulla tellus sed purus vestibulum sagittis pretium
          donec nec mattis ollis porta sit ut. Facilisi ut vulputate volutpat a
          aliquet.
          <br />
          <br />
          Facilisis sed quis pretium amet hac. Justo tristique sagittis sodales
          viverra venenatis integer fringilla.
        </p>

        <CTABtn text={'about us'} />
      </div>
    </section>
  );
};
