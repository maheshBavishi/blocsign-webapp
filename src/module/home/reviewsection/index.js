'use client'
import React from 'react'
import styles from './reviewsection.module.scss';
import Slider from "react-slick";
const ProfileImage = '/assets/images/profile.png';
const RandyProfileImage = '/assets/images/randy.png';
const RatingIcon = '/assets/icons/rating.svg';
const SliderArrow = '/assets/icons/slider-arrow.svg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={styles.rightArrowslider}
            onClick={onClick}
        >
            <img src={SliderArrow} alt='SliderArrow' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={styles.leftArrowslider}
            onClick={onClick}
        >
            <img src={SliderArrow} alt='SliderArrow' />
        </div>
    );
}

export default function Reviewsection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]

    };
    return (
        <div className={styles.reviewsectionAllContentalignment}>
            <div className='container-md3'>
                <div className={styles.title}>
                    <span className='animate__animated animate__slideInUp wow' data-wow-offset="200">REVIEW</span>
                    <h6 className='animate__animated animate__slideInUp wow' data-wow-offset="220">Testimonials</h6>
                    <p className='animate__animated animate__slideInUp wow' data-wow-offset="250">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className={styles.reviewslider}>
                    <Slider {...settings}>
                        <div className={styles.box}>
                            <div className={styles.profilegrid}>
                                <div className={styles.img}>
                                    <img src={ProfileImage} alt='ProfileImage' />
                                </div>
                                <div className={styles.text}>
                                    <p>Marcuss</p>
                                    <span>CEO</span>
                                    <div className={styles.rating}>
                                        <img src={RatingIcon} alt='RatingIcon' />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.profiledetails}>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                    dummy text
                                </p>
                            </div>
                            <div className={styles.quate}>
                                <p>”</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.profilegrid}>
                                <div className={styles.img}>
                                    <img src={RandyProfileImage} alt='RandyProfileImage' />
                                </div>
                                <div className={styles.text}>
                                    <p>Marcuss</p>
                                    <span>CEO</span>
                                    <div className={styles.rating}>
                                        <img src={RatingIcon} alt='RatingIcon' />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.profiledetails}>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                    dummy text
                                </p>
                            </div>
                            <div className={styles.quate}>
                                <p>”</p>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}
