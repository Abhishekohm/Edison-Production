import React, { useRef } from "react";
import "../styles/style.css";

const FeedbackCard = ({ content, type, link, img, static_img }) => {
  const imgRef = useRef(null);

  const toggleClass = (e) => {
    imgRef.current.classList.toggle("display-none");
  };

  return (
    <a
      href={link}
      className="block md:w-1/3"
      onMouseEnter={toggleClass}
      onMouseLeave={toggleClass}
    >
      <div className="flex justify-between flex-col px-5 py-6 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card h-full">
        <div className="width-full relative">
          <img
            class="static object-cover"
            src={static_img}
            ref={imgRef}
            style={{
              width: "350px",
              height: "350px",
            }}
          />
          <img
            class="active object-cover"
            src={img}
            style={{
              width: "350px",
              height: "350px",
            }}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              {type}
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              {content}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FeedbackCard;
