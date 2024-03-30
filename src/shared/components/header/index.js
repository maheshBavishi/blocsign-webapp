import React from 'react'
import styles from './header.module.scss';
const Logo = '/assets/logo/logo.svg';
export default function Header() {
  return (
    <div className="container">
      <div className={styles.headerAlignment}>
        <div className={styles.logo}>
          <a href='#herobanner'>
            <img src={Logo} alt='Logo'/>
        </a>
        </div>
        <div className={styles.menu}>
            <a href='#herobanner'>Home</a>
            <a href='#features'>Features</a>
            <a href='#howitworks'>How it work</a>
        </div>
      </div>
    </div>
  )
}
