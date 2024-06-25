// MiddleSectionIcons.js
'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faLine } from '@fortawesome/free-brands-svg-icons';
import styles from '../app/styles/middleSectionIcons.module.css';

const MiddleSectionIcons = () => {
    const openSkype = () => {
        window.open('https://join.skype.com/invite/qZOC9H9xfewa'); // Replace with actual Skype link
    };

    const openLine = () => {
        window.open('your line link'); // Replace with actual Line link
    };

    return (
        <div className={styles.wrapper}> 
        <div className={`${styles.middleSection} ${styles.sticky}`}>
            <FontAwesomeIcon icon={faSkype} className={`${styles.icon} ${styles.skype}`} onClick={openSkype} />
            <FontAwesomeIcon icon={faLine} className={`${styles.icon} ${styles.line}`} onClick={openLine} />
        </div></div>
    );
}                           

export default MiddleSectionIcons;
