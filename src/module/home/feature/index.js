import React from 'react'
import styles from './feature.module.scss';
const DrawImage = '/assets/images/draw.png';
const UploadImage = '/assets/images/upload.png';
const EasilyImage = '/assets/images/easily.png';
const Icon1 = '/assets/icons/icon1.svg';
export default function Feature() {
    return (
        <div className={styles.featureallContnetAlignment} id='features'>
            <div className='container-md'>
                <div className={styles.title}>
                    <span className='animate__animated animate__slideInUp wow' data-wow-offset="200">WHAT WE PROVIDE</span>
                    <h2 className='animate__animated animate__slideInUp wow' data-wow-offset="220">Best Feature of our mobile app</h2>
                    <p className='animate__animated animate__slideInUp wow' data-wow-offset="250">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
                </div>
                <div className={styles.allgridAlignment}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <div className={styles.img}>
                                <img src={DrawImage} alt='DrawImage' />
                            </div>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.iconAlignment}>
                                <img src={Icon1} alt='Icon1' />
                            </div>
                            <div className={styles.textstyle}>
                                <p>
                                    Draw & Type your signature in our app
                                </p>
                                <span>
                                    Lorem {`Ipsum is`} simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <div className={styles.img}>
                                <img src={UploadImage} alt='UploadImage' />
                            </div>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.iconAlignment}>
                                <img src={Icon1} alt='Icon1' />
                            </div>
                            <div className={styles.textstyle}>
                                <p>
                                Upload your signature
                                </p>
                                <span>
                                    Lorem {`Ipsum is`} simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <div className={styles.img}>
                                <img src={EasilyImage} alt='EasilyImage' />
                            </div>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.iconAlignment}>
                                <img src={Icon1} alt='Icon1' />
                            </div>
                            <div className={styles.textstyle}>
                                <p>
                                Easily sign any documents
                                </p>
                                <span>
                                    Lorem {`Ipsum is`} simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
