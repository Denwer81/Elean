import React from 'react'
import SliderShowRoom from '../Ui/SliderShowRoom/SliderShowRoom'
import Title from '../Ui/Title/Title'

import styles from './ShowRoom.module.css'

const ShowRoom = () => {
  return (
    <section className={styles.showRoom}>
      <Title title={'наш шоурум'} />
      <SliderShowRoom />
    </section>
  )
}

export default ShowRoom
