import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo_2 } from "../assets";

console.log(footerLinks);

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo_2}
          alt="ge-healthcare-chatbot"
          className="w-[266px] h-[72.14px] object-contain flex-start"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          The new era of more precise, connected and compassinate care
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-col justify-between flex-wrap md:mt-0 mt-10">
        <h2 class="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
          {footerLinks[0].title}
        </h2>
        <p class="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
          {footerLinks[0].address}
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-col justify-between flex-wrap md:mt-0 mt-10">
        <h2 class="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
          {footerLinks[1].title}
        </h2>
        <p class="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
          {footerLinks[1].address}
        </p>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 General Electric Company.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
