import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import SUMMIT from "../../public/svg/summit.svg";
import styles from "../../styles/ReUsables/aboutbox.module.scss";


interface BoxProps {
  image: StaticImageData,
    aspectRatio: string,
    name: string,
    text: string
}

const AboutBox = ({boxData}: {boxData: BoxProps}) => {
  return (
    <div className={styles.aboutbox}>
      <div className={styles.aboutb__image} style={{aspectRatio: boxData.aspectRatio }}>
        <Image fill quality={100} alt={boxData.name} src={SUMMIT} />
      </div>
      <div className={styles.about__content}>
        <span>{boxData.name}</span>
        <p>
          {boxData.}
        </p>
      </div>
    </div>
  );
};

export default AboutBox;
