import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Registration.module.css';
import Head from 'next/head';

const Registration = () => {
    return (
        <Container className="my-5">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.containerCustom}>
                <Container>
                    <Row className={styles.rowCustom}>
                        <Col md={6} className={styles.colCustom}>
                            <h2 className={styles.heading}>
                                Effortless & Affordable Company Registration in Thailand
                            </h2>
                            <p className={styles.paragraph}>
                                Kickstart your business in Thailand with our seamless registration services. Designed for both foreign entrepreneurs and established enterprises, we simplify the process, making it hassle-free and efficient. With our all-inclusive company registration services, you can have your Thai business up and running from a single, convenient location in as fast as 7 days. Trust us to be your reliable partner in establishing your presence in Thailand.
                            </p>
                        </Col>
                        <Col md={6} className={styles.colCustom}>
                            <div className={styles.imageContainer}>
                                <Image className={styles.image} src="/images/slide_1.png" alt="Company Registration" width={450} height={300} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.mt5}>
                <div className={styles.stepBox}>
                    <p className={styles.paragraph}>
                        Navigating the intricacies of establishing a business in Thailand demands careful attention to detail and adherence to specific procedures. Many foreign investors find the private limited company structure appealing for its flexibility and growth potential in the Thai business landscape. However, before diving into the registration process, it's essential to understand and fulfill several prerequisites.
                        <br />
                        Engaging a reputable service provider like Acclime can greatly streamline the process and ensure compliance with local regulations. This guide aims to walk you through each step of registering your Thai company, emphasizing key considerations to tailor the registration to your preferences.
                    </p>
                </div>
                <div className={styles.stepBox}>
                    <h3 className={styles.stepTitle}>Step 1: Company Name Reservation</h3>
                    <p className={styles.paragraph}>
                        Initiating the registration process involves securing a unique name for your enterprise through the Department of Business Development (DBD). It's crucial to select a name that doesn't replicate or closely resemble any existing registered entity, whether in English or Thai. Additionally, certain terms are prohibited from inclusion, and if 'Thailand' is part of the name, it must be enclosed in brackets at the end. Proposing multiple name options can increase the likelihood of approval. Once your chosen name is approved, it remains valid for 30 days, prompting a swift move to step two.
                    </p>
                </div>
                <div className={styles.stepBox}>
                    <h3 className={styles.stepTitle}>Step 2: Document Preparation and Signing</h3>
                    <p className={styles.paragraph}>
                        During this phase, we'll gather essential information about your upcoming venture, prepare the necessary paperwork, and collect your signature. This includes details such as the proposed company name, registered office location, objectives, share capital, promoter information, director details, office addresses, and shareholder information. Once compiled, these documents will be submitted to the DBD to kickstart the registration process.
                    </p>
                </div>
                <div className={styles.stepBox}>
                    <h3 className={styles.stepTitle}>Step 3: Company Registration</h3>
                    <p className={styles.paragraph}>
                        The duration of processing your company registration varies based on your business's specifics. Upon completion, you'll receive registration documents alongside a company/tax ID, marking a significant milestone in your business journey.
                    </p>
                </div>
                <div className={styles.stepBox}>
                    <h3 className={styles.stepTitle}>Step 4: Opening a Company Bank Account</h3>
                    <p className={styles.paragraph}>
                        Selecting your preferred bank and branch, specifying the type of account required, and designating authorized signatories are crucial steps in this process. A seamless banking setup facilitates smooth financial transactions for your business operations.
                    </p>
                </div>
                <div className={styles.stepBox}>
                    <h3 className={styles.stepTitle}>Step 5: Corporate Income Tax and VAT Registration</h3>
                    <p className={styles.paragraph}>
                        Post-registration, applying for a company corporate tax ID card from the Revenue Department within 60 days is imperative. VAT registration becomes necessary if your business meets specific criteria, such as employing foreigners and surpassing an annual revenue threshold. Document submission, including premises ownership details and lease agreements, is essential for compliance.
                    </p>
                </div>
                <div className={styles.stepBox}>
                    <h3 className={styles.stepTitle}>Step 6: Social Fund Registration</h3>
                    <p className={styles.paragraph}>
                        Ensuring both Thai and foreign employees are enrolled in the Social Security Fund (SSF) is mandatory. Submission of employee details and adherence to registration timelines is critical to avoid penalties and ensure compliance with labor regulations.
                    </p>
                    <p className={styles.paragraph}>
                        In summary, navigating the process of establishing a company in Thailand involves meticulous planning, adherence to regulatory requirements, and timely document submission. Engaging with experienced service providers can significantly simplify the process and ensure a smooth transition into the Thai business landscape.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Registration;
            