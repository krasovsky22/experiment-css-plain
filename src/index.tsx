import * as React from 'react'
import styles from './styles.module.css'

const PlaneExperiment = () => {
  return (
    <div className={styles['component-container']}>
      <div className={styles.earth}>
        <div className={styles.plane} />
      </div>
    </div>
  )
}

export default PlaneExperiment
