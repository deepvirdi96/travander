import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Content from "../../Components/Content/Content";
import PackageCard from "../../Components/PackageCard/PackageCard";
import styles from "./Home.module.css";

import packageBG1 from "./images/PackagesBG/package_bg_1.jpg";
import packageBG2 from "./images/PackagesBG/package_bg_2.jpg";
import packageBG3 from "./images/PackagesBG/package_bg_3.jpg";
import aboutUs1 from "./images/AboutUs/about_1.jpg";
import aboutUs2 from "./images/AboutUs/about_2.jpg";

const Home = () => {
  return (
    <Content>
      <div className="home__container">
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
        <section className={styles.packageCards__section}>
          <Container>
            <Row>
              <div className="col-md-3 px-3">
                <PackageCard
                  imageSrc={packageBG1}
                  cardTitle="Kedarnath Trek"
                  durationNights="2"
                  durationDays="3"
                  cardLocation="Delhi"
                />
              </div>
              <div className="col-md-3 px-3">
                <PackageCard
                  imageSrc={packageBG2}
                  cardTitle="Delhi Darshan"
                  durationNights="2"
                  durationDays="3"
                  cardLocation="Delhi"
                />
              </div>
              <div className="col-md-3 px-3">
                <PackageCard
                  imageSrc={packageBG3}
                  cardTitle="Har Ki Dun Trek"
                  durationNights="2"
                  durationDays="3"
                  cardLocation="Delhi"
                />
              </div>
              <div className="col-md-3 px-3">
                <PackageCard
                  imageSrc={packageBG3}
                  cardTitle="Kheerganga Trek"
                  durationNights="2"
                  durationDays="3"
                  cardLocation="Delhi"
                />
              </div>
            </Row>
          </Container>
        </section>
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
                <Button className={styles.rounded__button}>Read More</Button>
              </div>
              <div className="col-md-6">
                <div className={styles.aboutUs__imageSection}>
                  <Row>
                    <div className="col-md-6">
                      <img src={aboutUs1} className={styles.aboutImage1}/>
                    </div>
                    <div className="col-md-6">
                      <img src={aboutUs2} className={styles.aboutImage2}/>
                    </div>
                  </Row>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className={styles.plainBar}>
          <Container>
            <Row>
              <div className="col-md-10">
                <h4>Begin your adventurous journey here.</h4>
              </div>
              <div className="col-md-2">
                <Button className={styles.rounded__button__white}>Get Started</Button>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </Content>
  );
};

export default Home;
