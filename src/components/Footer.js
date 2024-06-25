import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../src/app/styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} ${styles.footerContent}`}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <Image src="/images/logo.svg" alt="Logo" width={450} height={200} className={`${styles.imgFluid} ${styles.footerLogo}`} />
                    </div>
                    <div className={`col-lg-6 col-md-6 mb-4 mb-md-0 ${styles.footerContact}`}>
                        <p className="mb-0">Phone: (123) 456-7890</p>
                        <p className="mb-0">We are open Monday - Friday</p>
                        <p>Time: 9:00 AM - 6:00 PM (UTC+7)</p>
                    </div>
                    <div className={`col-lg-3 col-md-6 mb-4 mb-md-0 ${styles.footerServices}`}>
                        <h5 className="text-uppercase mb-3">Services</h5>
                        <ul className="list-unstyled mb-0">
                            <li><Link href="/registration" className={styles.footerLink}>Business Registration</Link></li>
                            <li><Link href="/accounting" className={styles.footerLink}>Accounting</Link></li>
                            <li><Link href="/visa" className={styles.footerLink}>Visa & Work Permit</Link></li>
                        </ul>
                    </div>  
                </div>
            </div>
            <hr className={styles.footerHr} />
            <div className={`text-center p-3 ${styles.footerCopyright}`} style={{ fontFamily: 'Roboto, sans-serif' }}>
            <b>&copy; 2024 Big Step</b>
            </div>
        </footer>
    );
}

export default Footer;
