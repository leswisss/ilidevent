"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import styles from "../../styles/ReUsables/venuebanner.module.scss";

const VenueBanner = () => {
  const firstSlide = useRef(null);
  const secondIe = useRef(null);
  const sliderRef = useRef(null);
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;
    gsap.set(firstImage.current, { xPercent });
    gsap.set(secondImage.current, { xPercent });
    xPercent += speed * directionRef.current; // Use directionRef's current property
    requestAnimationFrame(animation);
  };

  // Use useGSAP hook to handle gsap animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1,
        onUpdate: (e) => (directionRef.current = e.direction * -1), // Update directionRef's current property
      },
      x: "-150px",
    });
    requestAnimationFrame(animation);
  });

  return (
    <section className={`${styles.vb__section}`}>
      <div className={styles.vbslider__container}>
        <div className={styles.vb__slider}>
          <div className={styles.slider__main}>
            <div className={styles.slider__content}>
              <div className={styles.first__slide}>
                <p>
                  NATIONAL ADVANCED SCHOOL OF PUBLIC WORKS | 25th - 27th & 30th
                  APRIL, 2025
                </p>
                <span className={styles.span__button}></span>
              </div>
              <div className={styles.first__slide}>
                <p>
                  NATIONAL ADVANCED SCHOOL OF PUBLIC WORKS | 25th - 27th & 30th
                  APRIL, 2025
                </p>
                <span className={styles.span__button}></span>
              </div>
            </div>
            <span className={styles.slider__space}></span>
          </div>
          <div className={styles.slider__main}>
            <div className={styles.slider__content}>
              <div className={styles.first__slide}>
                <p>
                  NATIONAL ADVANCED SCHOOL OF PUBLIC WORKS | 25th - 27th & 30th
                  APRIL, 2025
                </p>
                <span className={styles.span__button}></span>
              </div>
              <div className={styles.first__slide}>
                <p>
                  NATIONAL ADVANCED SCHOOL OF PUBLIC WORKS | 25th - 27th & 30th
                  APRIL, 2025
                </p>
                <span className={styles.span__button}></span>
              </div>
            </div>
            <span className={styles.slider__space}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueBanner;
