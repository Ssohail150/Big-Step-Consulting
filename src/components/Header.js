'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../app/styles/header.module.css';

const Header = () => {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    useEffect(() => {
        // Add event listener to handle closing dropdown on click outside
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.dropdown')) {
                setShowServicesDropdown(false);
            }
        };

        // Attach event listener when component mounts
        document.addEventListener('mousedown', handleOutsideClick);

        // Clean up event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleServicesDropdown = () => {
        setShowServicesDropdown(!showServicesDropdown);
    };

    return (
        <header className={`navbar navbar-expand-lg navbar-light ${styles.header}`}>
            <div className="container p-4">
                <div className={`navbar-brand ${styles.navBrand}`}>
                    <Link href="/" passHref>
                        <Image src="/images/logo.svg" alt="Logo" width={300} height={100} className="img-fluid" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav ms-auto ${styles.navList}`} style={{ fontSize: '1.3rem' }}>
                        <li className="nav-item">
                            <Link href="/" className={`nav-link ${styles.navLink}`}>Home</Link>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
                            <a className={`nav-link dropdown-toggle ${styles.navLink}`} role="button" id="servicesDropdown" data-bs-toggle="dropdown" aria-expanded={showServicesDropdown ? "true" : "false"}>
                                Services
                            </a>
                            <ul className={`dropdown-menu ${showServicesDropdown ? 'show' : ''}`} aria-labelledby="servicesDropdown">
                                <li><Link href="/registration" className={`dropdown-item ${styles.dropdownItem}`}>Business Registration</Link></li>
                                <li><Link href="/accounting" className={`dropdown-item ${styles.dropdownItem}`}>Accounting</Link></li>
                                <li><Link href="/visa" className={`dropdown-item ${styles.dropdownItem}`}>Visa & Work Permit</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className={`nav-link ${styles.navLink}`}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
