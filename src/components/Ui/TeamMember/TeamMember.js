import React from 'react'

import styles from './TeamMember.module.css'

const TeamMember = ({img, name, text}) => {
  return (
    <div>
      <img className={styles.image} src={img} alt="teamMember" width="540" height="720" />
      <p className={styles.name}>{name}</p>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default TeamMember