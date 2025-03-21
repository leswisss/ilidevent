import React from 'react'
import styles from "../../styles/Navigation/sidebar.module.scss"

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <div className={`container ${styles.sidebar__contianer}`}>
          <div className={styles.ilid__cancel}>
            <span>INNOVATION LAB for<br />INFRAST</span>
          </div>
          <div className={styles.sidebar__content}>

          </div>
          <div className={styles.sidebar__footer}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar