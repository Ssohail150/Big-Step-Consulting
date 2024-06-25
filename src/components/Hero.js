"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import styles from '../app/styles/hero.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Hero = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Enable arrows
    };

    return (
        <div className={styles.hero}>
            <Slider {...settings}>
                <div className={styles.carouselItem}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>We are Big Step Consulting</h2>
                                <p>Big Step Consulting excels in Business Registration, Accounting, and Visa & Work Permit Services, especially for the Indian community. Our owner, fluent in Hindi, Gujarati, and English, provides personalized support. We specialize in top-tier outsourcing and consulting solutions, ensuring smooth business operations and growth. Committed to excellence, we navigate the complexities of business setup and regulatory compliance, offering reliable support every step of the way. Trust us to meet your needs, letting you focus on driving your business forward confidently.</p>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.imageContainer}>
                                    <Image src="/images/logo.svg" alt="Logo" width={600} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/registration" className={`${styles.carouselLink} ${styles.noUnderline}`}>
                    <div className={styles.carouselItem}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Effortless & Affordable Company Registration in Thailand</h2>
                                    <p>Kickstart your business in Thailand with our seamless registration services. Designed for both foreign entrepreneurs and established enterprises, we simplify the process, making it hassle-free and efficient. With our all-inclusive company registration services, you can have your Thai business up and running from a single, convenient location in as fast as 7 days. Trust us to be your reliable partner in establishing your presence in Thailand.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.imageContainer}>
                                        <Image src="/images/slide_1.png" alt="Company Registration" width={450} height={300} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/accounting" className={`${styles.carouselLink} ${styles.noUnderline}`}>
                    <div className={styles.carouselItem}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Comprehensive Accounting & Tax Packages in Thailand</h2>
                                    <p>Our flexible accounting packages are tailored to meet the unique needs of each client. Pricing is determined by the size and nature of your company, monthly turnover, and the number of transactions recorded each month. Let us handle your accounting and tax requirements, so you can focus on growing your business.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.imageContainer}>
                                        <Image src="/images/Accounting.png" alt="Accounting" width={500} height={300} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/visa" className={`${styles.carouselLink} ${styles.noUnderline}`}>
                    <div className={styles.carouselItem}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Thailand Work Permit & Business Visa Services</h2>
                                    <p>Our experienced immigration team is here to assist with your Thailand work permit requirements, ensuring quick, easy, and affordable application processing and renewals. Additionally, we offer support for obtaining a one-year multiple entry non-immigrant B (business) visa. This visa is ideal for foreigners interested in pursuing business opportunities or investing in a company, business, or condominium in Thailand. Let us simplify your path to working and investing in Thailand.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.imageContainer}>
                                        <Image src="/images/Visa.png" alt="Visa Services" width={500} height={300} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Slider>
        </div>
    );
}

export default Hero;
