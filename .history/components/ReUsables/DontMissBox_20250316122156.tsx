import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import IMAGE from "../../public/images/attend.jpg";
import styles from "../../styles/ReUsables/dontmissbox.module.scss";


interface MissProps{
  image: StaticImageData,
  title: string,
  text: string
}

const DontMissBox = ({data}: {data:  MissProps}) => {
  return (
    <div className={styles.dmb__wrapper}>
      <div className={styles.dmw__image}>
        <Image fill quality={100} alt={data.title} src={data.image} />
      </div>
      <div className={styles.dm__text}>
        <span>{data.title}</span>
        <p>
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default DontMissBox;
