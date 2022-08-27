import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Carousel,
} from "./components";

const App = () => {
  const callBot = function (d, m) {
    var kommunicateSettings = {
      appId: "25b89e08d36c913fe65c59ace3a77b90a",
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0];
    h.appendChild(s);
    window.kommunicate = m;
    m._globals = kommunicateSettings;
  };
  callBot(document, window.kommunicate || {});
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Billing />
          <CardDeal />
          {/* replace Testimonials component with Carousel component   */}
          <Testimonials />
          <Carousel />
          {/* Will remove later let it be commented */}
          {/* <Business /> */}
          {/* <Clients /> */}
          {/* <CTA /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
