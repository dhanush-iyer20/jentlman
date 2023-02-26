import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ index, icon, title, content }) => {
  console.log("hello");
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } cardist`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-4 bg--dimBlue ${styles.flexCenter}`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="text-white font-poppins font-semibold text-[18px] leading-[23px]">
          {title}
        </h4>
        <p className={`${styles.paragraph} mt-3`}>{content}</p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="featues" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Why choose
          <br className="sm:block hidden" /> us?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Listed here are some reasons why you should choose us
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => {
          return <FeatureCard key={feature.id} {...feature} index={i} />;
        })}
      </div>
    </section>
  );
};

export default Business;
