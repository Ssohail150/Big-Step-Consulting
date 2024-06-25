import React from 'react';
import Image from 'next/image';
import styles from '../app/styles/about.module.css';

const About = () => {
    return (
        <div className={`${styles.container} container`}>
            <div className={`${styles.directorMessage}  align-items-center`}>
                <div className={`${styles.logoContainer} col-lg-3 col-md-4 col-sm-12`}>
                    <Image src="/images/Boy logo.png" alt="Logo" width={150} height={150} className={styles.logo} />
                </div>
                <div className="info col-lg-9 col-md-8 col-sm-12">
                    <h2>A message from our director</h2>
                    <p className={styles.message}>
                        At Big Step Consulting, we are dedicated to excellence, committed to delivering value-added services in a proactive, efficient, and timely manner. As a client, expect professional, knowledgeable, and consistent advice, coupled with a commitment to transparency and open communication. Please feel free to reach out personally with any inquiries. We eagerly anticipate collaborating with you.
                    </p>
                    <p className={styles.signature}><strong>K. Siamwala</strong><br />Managing Director<br />Big Step Consulting</p>
                </div>
            </div>
        </div>
    );
}

export default About;
