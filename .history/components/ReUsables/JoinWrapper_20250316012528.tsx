import React from 'react'
import OpportunityBox from './OpportunityBox'
import { JoinData } from '@/utils'
import type { StaticImageData } from "next/image";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

interface JoinDataItem {
  image: StaticImageData;
  heading: string;
  text: string;
  linkData: {
    name: string;
    link: string;
  };
}

const JoinWrapper = ({data}: {data: JoinDataItem[]}) => {
  return (
    <div className={styles.jbw__wrapper}>
      {JoinData.map((data, i) => (
        <OpportunityBox key={i} boxData={data} />
      ))}
    </div>
  )
}

export default JoinWrapper