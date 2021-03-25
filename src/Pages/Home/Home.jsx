import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Content from "../../Components/Content/Content";
import styles from "./Home.module.css";
import aboutUs1 from "./images/AboutUs/about_1.jpg";
import aboutUs2 from "./images/AboutUs/about_2.jpg";
import ContactUs from "../../Components/ContactUs/ContactUs";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import PackagesSection from "../../Components/PackagesSection/PackagesSection";

const Home = () => {
  return (
    <Content>
      <div className="home__container">
        {/* Hero Section Start */}
        <section className={styles.hero__section}>
          <div className="container">
            <div className={styles.herotext__container}>
              <p className={styles.herotext__p}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, voluptate.
              </p>
            </div>
          </div>
        </section>
        {/* Hero Section End */}

        {/* Packages Section Start */}
        <section className={styles.packageCards__section}>
          <Container>
            <Row>
              <PackagesSection />
            </Row>
          </Container>
        </section>
        {/* Packages Section End */}

        {/* About Us Section Start */}
        <section className={styles.aboutUs__section}>
          <Container>
            <Row>
              <div className="col-md-6">
                <h3 className={styles.aboutUs__title}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque, accusamus.
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum sint debitis voluptates ullam mollitia dolor nam
                  molestias dolorem enim accusantium, illum unde facilis hic
                  repellendus officia magnam cupiditate laborum modi.
                </p>
                <ButtonCustom
                  style="rounded_button_gradient"
                  text="Read More"
                />
              </div>
              <div className="col-md-6">
                <div className={styles.aboutUs__imageSection}>
                  <Row>
                    <div className="col-md-6">
                      <img src={aboutUs1} className={styles.aboutImage1} />
                    </div>
                    <div className="col-md-6">
                      <img src={aboutUs2} className={styles.aboutImage2} />
                    </div>
                  </Row>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        {/* About Us Section End */}

        {/* Horizontal Devider Start */}
        <section className={styles.plainBar}>
          <Container>
            <Row>
              <div className="col-md-10">
                <h4>Begin your adventurous journey here.</h4>
              </div>
              <div className="col-md-2">
                <ButtonCustom style="rounded_button_white" text="Get Started" />
              </div>
            </Row>
          </Container>
        </section>
        {/* Horizontal Devider End */}

        {/* Contact Us Section Start */}
        <section>
          <ContactUs />
        </section>
        {/* Contact Us Section End */}
      </div>
    </Content>
  );
};

export default Home;
