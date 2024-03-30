import React from 'react'
import styles from './footer.module.scss';
const FooterLogo = '/assets/logo/footer-logo.svg';
const CopyRightIcon = '/assets/icons/copyright.svg';
export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className='container-md5'>
            <div className={styles.footeralignment}>
                <div className={styles.logo}>
                    <a href='#herobanner'>
                    <img src={FooterLogo} alt='FooterLogo'/>
                    </a>
                </div>
                <div className={styles.footermenu}>
                <a href='#features'>Features</a>
            <a href='#howitworks'>How it work</a>
                </div>
            </div>
            <div className={styles.copyright}>
                <img src={CopyRightIcon} alt='CopyRightIcon'/>
                <p> Copyright 2024. All right reserved.</p>
            </div>
        </div>
    </div>
  )
}
