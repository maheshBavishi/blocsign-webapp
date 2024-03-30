import React from 'react'
import styles from './downloadapp.module.scss';
const DocumentImage = '/assets/images/document.png';
const Appstore = '/assets/icons/appstore.svg';
const Googletore = '/assets/icons/google.svg';
export default function Downloadapp() {
  return (
    <div className='animate__animated animate__slideInUp wow' data-wow-offset="200">
    <div className={styles.downloadappAllContentAlignment}>
      <div className='container-md4'>
        <div className={styles.box}>
            <div className={styles.text}>
                <h4>Download app to easily sign any documents</h4>
                <p>
                    Lorem {`Ipsum is`} simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard 
                    dummy text 
                </p>
                <div className={styles.buttonAlignment}>
              <img src={Appstore} alt='Appstore'/>
            <img src={Googletore} alt='Googletore'/>
            </div>
            </div>
            <div className={styles.img}>
                <img src={DocumentImage} alt='DocumentImage'/>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
