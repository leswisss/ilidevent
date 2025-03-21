import React from 'react'
import Image from 'next/image'
import SUMMIT from "../../public/svg/summit.svg"
import styles from "../../styles/ReUsables/aboutbox.module.scss"

const AboutBox = () => {
  return (
    <div className={styles.aboutbox}>
      <div className={styles.aboutb__image}>
        <Image fill quality={100} alt="Summit Icon" src={SUMMIT}/>
      </div>
      <div className={styles.about__content}>
        <span></span>
      </div>
    </div>
  )
}

export default AboutBox