import React from 'react'
import styles from "../../styles/Navigation/preloader.module.scss"


const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container}>
        <div className={styles.preload__home}>
          <div className={styles.loader}>
          
          </div>

        </div>
        <div className={styles.preload__other}>

        </div>
      </div>
    </div>
  )
}

export default Preloader