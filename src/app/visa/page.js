import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Visa.module.css";

const VisaInformation = () => {
    return (
        <Container className="my-5">
            <div className={styles.containerCustom1}>
                <Container>
                    <Row className={styles.rowCustom}>
                        <Col md={6} className={styles.colCustom}>
                            <h2 className={styles.heading}>
                                Thailand Work Permit & Business Visa Services
                            </h2>
                            <p className={styles.paragraph}>
                                Our experienced immigration team is here to assist with your
                                Thailand work permit requirements, ensuring quick, easy, and
                                affordable application processing and renewals. Additionally, we
                                offer support for obtaining a one-year multiple entry
                                non-immigrant B (business) visa. This visa is ideal for
                                foreigners interested in pursuing business opportunities or
                                investing in a company, business, or condominium in Thailand.
                                Let us simplify your path to working and investing in Thailand.
                            </p>
                        </Col>
                        <Col md={6} className={styles.colCustom}>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.image}
                                    src="/images/Visa.png"
                                    alt="Work Permit & Business Visa"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.containerCustom}>
                <h4 className={styles.heading}>Work Permit</h4>
                <p className={styles.paragraph}>
                    For each foreign employee seeking a Thai work permit, several
                    requirements must be met:
                </p>
                <ul className={styles.list}>
                    <li>
                        2M THB in Registered Capital: The company must have a minimum
                        registered capital of 2 million THB to sponsor the work permit for
                        each foreign employee.
                    </li>
                    <li>
                        Four Thai Employees Registered in Social Fund: As part of the
                        employment conditions, the company must have at least four Thai
                        employees registered in the Social Security Fund.
                    </li>
                    <li>
                        VAT Registration: The company should be registered for VAT,
                        indicating its legal standing and financial activity in compliance
                        with Thai tax regulations.
                    </li>
                </ul>
                <p className={styles.paragraph}>Additional considerations include:</p>
                <ul className={styles.list}>
                    <li>
                        Valid Non-Immigrant Visa: The individual applying for the work
                        permit must possess a valid and appropriate non-immigrant type visa,
                        aligning with the purpose of their employment in Thailand.
                    </li>
                    <li>
                        Educational Qualifications: Depending on the employment
                        classification, proof of educational qualifications may be necessary
                        to meet specific job requirements or visa conditions.
                    </li>
                    <li>
                        Proper Working Environment: The company must maintain a formal and
                        realistic working environment consistent with its registered
                        objectives. This ensures that all employees, including foreign
                        staff, operate within a legally recognized and suitable workplace
                        setting.
                    </li>
                </ul>
                <p className={styles.paragraph}>
                    Adhering to these requirements and considerations is essential for
                    both the sponsoring company and the foreign employee to facilitate a
                    smooth and legally compliant process for obtaining a Thai work permit.
                </p>
            </div>
            <div className={styles.containerCustom}>
                <h4 className={styles.heading}>Business Visa</h4>
                <p className={styles.paragraph}>
                    The process of obtaining a Non-Immigrant B visa for Thailand involves
                    several steps and specific documentation requirements. Here's a
                    breakdown:
                </p>
                <h5 className={styles.subHeading}>Requirements & Documentation:</h5>
                <ul className={styles.list}>
                    <li>
                        Passport Validity: Ensure your passport is valid for at least 6
                        months from your intended arrival date in Thailand.
                    </li>
                    <li>
                        Invitation or Confirmation Letter: You'll need an invitation or
                        confirmation letter from the organization, entity, or company in
                        Thailand, specifying the purpose of your travel.
                    </li>
                    <li>
                        Embassy Fee: Be prepared to pay the applicable embassy fee for
                        processing your visa application.
                    </li>
                    <li>
                        Additional Supporting Documents: Depending on the specific
                        requirements of the Royal Thai Embassy or consulate, additional
                        supporting documents may be requested.
                    </li>
                    <li>
                        Proof of Financial Funds: Providing proof of financial stability may
                        be required, especially if you're entering Thailand as an investor.
                    </li>
                </ul>
                <h5 className={styles.subHeading}>Non B Visa Application Process:</h5>
                <ol className={styles.orderedList}>
                    <li>
                        <strong>Document Preparation:</strong> Gather the necessary
                        documents provided by the organization offering employment in
                        Thailand.
                    </li>
                    <li>
                        <strong>Submission:</strong> Submit the required documents to the
                        Thai Embassy or consulate in your home country, either by mail or in
                        person.
                    </li>
                    <li>
                        <strong>Payment:</strong> Pay the embassy or consular fees, which
                        can typically be done in cash, by check, or via credit card.
                    </li>
                    <li>
                        <strong>Processing:</strong> Wait for the embassy or consulate to
                        review and process your visa application. Processing times vary,
                        typically ranging from 2 to 10 business days, depending on the
                        specific embassy or consulate.
                    </li>
                    <li>
                        <strong>Passport Collection:</strong> Once your visa application is
                        approved, you'll receive your passport with the Non B Visa stamped
                        in it.
                    </li>
                </ol>
                <p className={styles.paragraph}>
                    <strong>Upon Arrival in Thailand:</strong>
                </p>
                <ul className={styles.list}>
                    <li>
                        Upon entering Thailand, the immigration officer will stamp your visa
                        as used and issue another visa in your passport, validating your Non
                        B visa for 90 days.
                    </li>
                    <li>
                        During this initial 90-day period, you should proceed to obtain your
                        work permit and prepare the necessary documentation for a one-year
                        extension of stay.
                    </li>
                </ul>
            </div>
            <div className={styles.containerCustom}>
                <h4 className={styles.heading}>Retirement Visa</h4>
                <p className={styles.paragraph}>What You Need to Know:</p>
                <h5 className={styles.subHeading}>Eligibility Criteria:</h5>
                <ul className={styles.list}>
                    <li>Applicants must be 50 years or older.</li>
                    <li>
                        A valid passport with at least 6 months validity and 2 blank pages
                        is required.
                    </li>
                </ul>
                <h5 className={styles.subHeading}>Financial Requirements:</h5>
                <ul className={styles.list}>
                    <li>
                        Options include a security deposit of THB 800,000, a monthly income
                        of 65,000 THB, or a combination of both.
                    </li>
                    <li>
                        Supporting documents like bank statements or income verification
                        letters are necessary.
                    </li>
                </ul>
                <h5 className={styles.subHeading}>Additional Documentation:</h5>
                <ul className={styles.list}>
                    <li>
                        Depending on circumstances, documents like a police clearance,
                        medical certificate, and health insurance may be required.
                    </li>
                </ul>
                <h5 className={styles.subHeading}>Visa Application Process:</h5>
                <ul className={styles.list}>
                    <li>
                        Application can be done either in your home country or within
                        Thailand.
                    </li>
                    <li>
                        For application abroad, submission of required documents to the Thai
                        embassy or consulate is necessary.
                    </li>
                    <li>
                        For in-country application, assistance from service providers is
                        available.
                    </li>
                </ul>
                <h5 className={styles.subHeading}>Renewal and Maintenance:</h5>
                <ul className={styles.list}>
                    <li>The visa is renewable annually within Thailand.</li>
                    <li>
                        Regular financial maintenance is required, including ensuring the
                        security deposit remains intact.
                    </li>
                </ul>
                <h5 className={styles.subHeading}>Reporting and Permits:</h5>
                <ul className={styles.list}>
                    <li>
                        Holders must report their residential address every 90 days to the
                        Immigration Office.
                    </li>
                    <li>
                        A multiple re-entry permit is needed for international travel during
                        the visa validity period.
                    </li>
                </ul>
                <h5 className={styles.subHeading}>Financial Considerations:</h5>
                <ul className={styles.list}>
                    <li>
                        Attention to maintaining the required balance in the bank account is
                        crucial.
                    </li>
                    <li>
                        Importation of personal effects may be subject to customs duties.
                    </li>
                </ul>
                <h5 className={styles.subHeading}>Steps Involved:</h5>
                <ol className={styles.orderedList}>
                    <li>
                        <strong>Prepare Documents:</strong> Gather necessary documents
                        including passport, financial statements, and any additional
                        required paperwork.
                    </li>
                    <li>
                        <strong>Application Submission:</strong> Submit the application form
                        along with the required documents to the Thai embassy or consulate
                        in your home country or within Thailand.
                    </li>
                    <li>
                        <strong>Visa Approval:</strong> Await approval of the retirement
                        visa, which may involve initial approval for 90 days with possible
                        extension to one year.
                    </li>
                    <li>
                        <strong>Financial Maintenance:</strong> Maintain the required
                        balance in the bank account throughout the visa validity period.
                    </li>
                    <li>
                        <strong>Reporting and Permits:</strong> Fulfill reporting
                        obligations every 90 days and obtain a multiple re-entry permit if
                        planning international travel.
                    </li>
                    <li>
                        <strong>Renewal:</strong> Renew the visa annually, ensuring
                        compliance with financial requirements and documentation.
                    </li>
                    <li>
                        <strong>Consultation:</strong> Seek assistance from visa service
                        providers for guidance throughout the process, including
                        consultation on any queries or concerns.
                    </li>
                </ol>
            </div>
        </Container>
    );
};

export default VisaInformation;
