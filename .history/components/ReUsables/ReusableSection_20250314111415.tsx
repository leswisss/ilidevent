import React from "react";
import HighlightedText from "./HighlighedText";
import Button from "./Button";
import ButtonTwo from "./ButtonTwo";
import styles from "../../styles/ReUsables/reusablesection.module.scss";

interface ReusableSectionProps {
  header: string;
  keywords?: string[];
  text: string;
  textColor: string;
  backgroundColor: string;
  buttonData?: {
    name: string;
    link: string;
    buttonText?: string;
  };
  children: React.ReactNode;
}

const ReusableSection = ({
  header,
  keywords,
  text,
  textColor,
  backgroundColor,
  buttonData,
  children,
}: ReusableSectionProps) => {
  return (
    <section
      className={`section ${styles.rs__section}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={`container ${styles.rs__container}`}>
        <div className={styles.rs__wrapper}>
          <div className={styles.rscontent__header}>
            <HighlightedText
              text={header}
              keywords={keywords}
              color={textColor}
            />
            <p style={{ color: textColor }} className={styles.p__tag}>{text}</p>
          </div>
          <div className={styles.rsmain__content}>{children}</div>
          {buttonData && backgroundColor === "#C24002" ? (
            <Button fill={false} buttonInfo={buttonData} />
          ) : (
            <div>
              {buttonData?.buttonText && <p className={styles.button__text}>{buttonData?.buttonText}</p>}
              <ButtonTwo buttonInfo={buttonData} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReusableSection;
