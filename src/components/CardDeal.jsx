import { card, previewvideo3 } from "../assets";
import styles, { layout } from "../style";
import Video from "./Video";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        This AI tech is changing <br className="sm:block hidden" /> MR Neuro
        Imaging.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        AIRx is an AI-based, automated workflow tool for MRI brain scanning that
        automatically "prescribes" slices to help reduce redundant, manual
        steps.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <Video video={previewvideo3} />
    </div>
  </section>
);

export default CardDeal;
