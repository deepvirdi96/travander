import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__container}>
        <Container>
          <Row>
            <div className="col-md-6">
              <div className="footerContentLeft">
                <h4>About Travander</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequuntur expedita aspernatur tempore ut eligendi eveniet
                  officia odit. Laudantium, quis est.
                </p>
                <h4>Connect</h4>
                <div className={styles.socialIcons__container}>
                  <ul className={styles.socialIcons__list}>
                    <li>
                      <a href="#" title="Facebook">
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className={styles.socialIcons__item}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="LinkedIn">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className={styles.socialIcons__item}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.footerContentRight}>
                <Row>
                  <div className="col-md-4">
                    <p>Links</p>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">Sign in</Link>
                      </li>
                      <li>
                        <Link to="/">Sign up</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <p>Contact</p>
                  </div>
                </Row>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
