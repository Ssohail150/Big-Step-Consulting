// pages/contact.js
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .form-control {
        border-color: #c6e6f5;
        border-width: 2px;
      }
      .custom-bg {
        background-color: #c6e6f5;
        padding: 0 4px;
      }
      .custom-button {
        background-color: #1d9ada;
        border-color: #1d9ada;
        color: #fff;
                font-weight: bold;

      }
      .custom-button:hover {
        background-color: ##c6e6f5;
        border-color: #c6e6f5;
        color: #fff;
      }
          h1, h5 {
        font-weight: bold;
      }
      .highlight {
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Contact Us</h1>
          <p>Connect with our experts.</p>
          <p>
            Our dedicated team is eager to understand your business needs and address any inquiries you may have. Please use our quick contact form to reach out to us. We promise to respond <span className="custom-bg highlight">within one business day.</span>
          </p>
          <Form>
            <Form.Group controlId="serviceArea" className="mb-3">
              <Form.Label>I'm interested in: *</Form.Label>
              <Form.Control as="select">
                <option>Please select a service area</option>
                <option>PEO/Employer of Record</option>
                <option>Market entry (Advisory, formation & licensing)</option>
                <option>BOI incentive support</option>
                <option>Operational support (Governance, Accounting & tax, HR & payroll, Visas & work permits)</option>
                <option>Legal services</option>
                <option>Corporate advisory & transaction support</option>
                <option>Something else</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="businessName" className="mb-3">
              <Form.Label>Business/Organisation Name *</Form.Label>
              <Form.Control type="text" placeholder="Acme Corporation" />
            </Form.Group>
            <Form.Group controlId="projectDetails" className="mb-3">
              <Form.Label>Project Details *</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tell us more about your business and what you are aiming to achieve." />
            </Form.Group>
            <h5>How can we reach you?</h5>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name *</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="businessEmail" className="mb-3">
              <Form.Label>Business Email *</Form.Label>
              <Form.Control type="email" placeholder="(We will contact you by email)" />
            </Form.Group>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone (E.g. +66 XX XXX XXXX)</Form.Label>
              <Form.Control type="text" placeholder="(In case we cannot reach you by email)" />
            </Form.Group>
            <Button variant="primary" type="submit" className="custom-button">
              Submit
            </Button>
          </Form>
          <h5 className="mt-5">Other ways to get in touch</h5>
          <p><FaPhone /> <span className="highlight">+668 78611021 00</span></p>
          <p><FaPhone /> <span className="highlight">+668 78611052 00</span></p>
          <p><FaEnvelope /> <span className="highlight">k.siamwala@yahoo.com</span></p>
          <h5 className="mt-5"><FaLock /> Your Privacy</h5>
          <p>We value your privacy and will never share your information with any third party.</p>
          <p>
            This form collects your name, contact number, and email address so that we can communicate with you and provide a quote for our services. Please review our <Link href="/privacy-policy">Privacy Policy</Link> to understand how we manage and protect your data.
          </p>
          <h5 className="mt-5">Visit our Thailand Office</h5>
          <p>We are open from Monday to Friday, 9am – 6pm.</p>
          <address className="highlight">
            Big Step (Thailand) Co., Ltd.<br />
            74 Soi Santiphab, Naret Road,<br />
            Bangrak, Bangkok 10500, Thailand<br />
          </address>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;