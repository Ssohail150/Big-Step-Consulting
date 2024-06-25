import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Accounting.module.css';

const AccountingInformation = () => {
    return (
        <Container className="my-5">
            <div className={styles.customSection}>
                <Row>
                    <Col md={6}>
                        <h2 className={styles.heading}>Thailand Accounting Services</h2>
                        <p className={styles.paragraph}>Our dedicated accounting team offers comprehensive services tailored to meet the financial reporting and compliance needs of your business in Thailand. From bookkeeping and payroll management to tax preparation and statutory filing, we ensure accuracy, efficiency, and adherence to Thai regulations. Partner with us to streamline your financial operations and maintain compliance with confidence.</p>
                    </Col>
                    <Col md={6} className={styles.colCustom}>
                        <div className={styles.imageContainer}>
                            <Image src="/images/Accounting.png" alt="Accounting Services" width={500} height={300} className={styles.image} />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={styles.containerCustom}>
                <h4 className={styles.heading}>Bookkeeping and Financial Reporting</h4>
                <p className={styles.paragraph}>Maintaining accurate and up-to-date financial records is essential for any business operating in Thailand. Our bookkeeping services include:</p>
                <ul className={styles.list}>
                    <li>Recording financial transactions</li>
                    <li>Preparing financial statements</li>
                    <li>Bank reconciliation</li>
                    <li>Accounts payable and receivable management</li>
                </ul>
                <p className={styles.paragraph}>We ensure compliance with Thai accounting standards and regulations, providing you with clear insights into your business's financial health.</p>
            </div>
            <div className={styles.containerCustom}>
                <h4 className={styles.heading}>Payroll Management</h4>
                <p className={styles.paragraph}>Our payroll services simplify the complexity of managing employee compensation and benefits. We offer:</p>
                <ul className={styles.list}>
                    <li>Payroll processing and calculation</li>
                    <li>Employee tax withholding and reporting</li>
                    <li>Benefits administration</li>
                    <li>Compliance with labor laws and regulations</li>
                </ul>
                <p className={styles.paragraph}>Ensure timely and accurate payroll disbursements while complying with Thai labor laws and regulations.</p>
            </div>
            <div className={styles.containerCustom}>
                <h4 className={styles.heading}>Taxation and Compliance</h4>
                <p className={styles.paragraph}>Navigating Thailand's tax landscape requires expert knowledge and attention to detail. Our taxation services include:</p>
                <ul className={styles.list}>
                    <li>Corporate income tax preparation and filing</li>
                    <li>VAT registration and compliance</li>
                    <li>Withholding tax obligations</li>
                    <li>Customs duties and excise tax compliance</li>
                </ul>
                <p className={styles.paragraph}>Stay compliant with Thai tax laws and regulations, minimizing risks and optimizing tax efficiency.</p>
            </div>
        </Container>
    );
};

export default AccountingInformation;
