import react from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import styles from "./ContactUs.module.css";
import contactUsImage from './contact_us2.gif';

const ContactUs = (props) => {
  return (
    <div className={styles.contact_us}>
      <Container>
        <Row>
          <div className="col-md-7">
            <h2>If you have any question drop a message</h2>
            <Form>
              <Row>
                <div className="col-md-6">
                  <Form.Group controlId="nameControlId">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="emailControlId">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </div>
              </Row>
              <Form.Group controlId="subjectControlId">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group controlId="messageControlId">
                <Form.Control as="textarea" rows={5} placeholder="Your Message"/>
              </Form.Group>
            <ButtonCustom text="Send Message"/>
            </Form>
          </div>
          <div className="col-md-5">
              <img src={contactUsImage} className="contact_us_image" alt=""/>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
