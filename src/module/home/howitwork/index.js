import React from 'react'
import styles from './howitwork.module.scss';
const UserIcon = '/assets/icons/user.svg';
export default function Howitwork() {
  return (
    <div className={styles.howitworksAllContnetAlignment} id='howitworks'>
      <div className='container-md2'>
        <div className={styles.title}>
            <span className='animate__animated animate__slideInUp wow' data-wow-offset="200">EASY STEPS</span>
            <h2 className='animate__animated animate__slideInUp wow' data-wow-offset="220">How it works</h2>
            <p className='animate__animated animate__slideInUp wow' data-wow-offset="250">Lorem {`Ipsum is`} simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.textgrid}>
                    <h4>Download & Register</h4>
                    <img src={UserIcon}alt='UserIcon'/>
                </div>
                <p>
                    Lorem {`Ipsum is`} simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry`}
                    s standard dummy text 
                </p>
                <div className={styles.count}>01</div>
            </div>
            <div className={styles.griditems}>
                <div className={styles.textgrid}>
                    <h4>Add your <br/> Signature</h4>
                    <img src={UserIcon}alt='UserIcon'/>
                </div>
                <p>
                    Lorem {`Ipsum is`} simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry`}
                    s standard dummy text 
                </p>
                <div className={styles.count}>02</div>
            </div>
            <div className={styles.griditems}>
                <div className={styles.textgrid}>
                    <h4>Start using our <br/> app</h4>
                    <img src={UserIcon}alt='UserIcon'/>
                </div>
                <p>
                    Lorem {`Ipsum is`} simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry`}
                    s standard dummy text 
                </p>
                <div className={styles.count}>03</div>
            </div>
        </div>
      </div>
    </div>
  )
}
