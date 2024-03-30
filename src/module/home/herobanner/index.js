import React from 'react'
import styles from './herobanner.module.scss';
import Header from '@/shared/components/header';
const HeroBannerImage = '/assets/images/herobanner.png';
const Appstore = '/assets/icons/appstore.svg';
const Googletore = '/assets/icons/google.svg';
const ArrowIcon = '/assets/icons/arrow.svg';
export default function Herobanner() {
  return (
    <div className={styles.herobannerDesign} id='herobanner'>
      <Header/>
      <div className={styles.herobannerAlignment}>
        <div className={styles.grid}>
          <div>
            <h1 className='animate__animated animate__slideInUp wow' data-wow-offset="200">
            Best Way to Signature Add in Document
            </h1>
            <p className='animate__animated animate__slideInUp wow' data-wow-offset="250">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
              dummy text 
            </p>
            <div className='animate__animated animate__slideInUp wow' data-wow-offset="300">
            <div className={styles.buttonAlignment}>
              <img src={Appstore} alt='Appstore'/>
            <img src={Googletore} alt='Googletore'/>
            </div>
            </div>
          </div>
          <div className={styles.relative}>
          <div className={styles.img}>
            <img className='animate__animated animate__slideInUp wow' data-wow-offset="300" src={HeroBannerImage} alt='HeroBannerImage'/>
          </div>
          <div className={styles.arrowIcon}>
            <img className='animate__animated animate__slideInUp wow' data-wow-offset="200" src={ArrowIcon}alt='ArrowIcon'/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
