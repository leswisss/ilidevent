import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/venueone.jpg"
import IMAGE2 from "../../public/images/venuetwo.jpg"
import IMAGE3 from "../../public/images/venuethree.jpg"
import styles from "../../styles/ReUsables/venuewrapper.module.scss"


const VenueWrapper = () => {
  const venueImages = [IMAGE, IMAGE2, IMAGE3]
  return (
    <div className={styles.venue__wrapper}>
      <div className={styles.venue__main}>

      </div>
    </div>
  )
}

export default VenueWrapper