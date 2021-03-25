import React, { Component } from "react";
import PackageCard from "../../Components/PackageCard/PackageCard";
import packageBG1 from "./PackagesBG/package_bg_1.jpg";
import packageBG2 from "./PackagesBG/package_bg_2.jpg";
import packageBG3 from "./PackagesBG/package_bg_3.jpg";
import TinySlider from "tiny-slider-react";
import styles from "./PackageSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

class PackagesSection extends Component {
  settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    items: 4,
    controls: false,
  };

  onGoTo = (dir) => {
    this.ts.slider.goTo(dir);
  };

  render() {
    return (
      <div className={styles.package__container}>
        <TinySlider settings={this.settings} ref={(ts) => (this.ts = ts)}>
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
          <div className="col-md-3 px-3">
            <PackageCard
              imageSrc={packageBG3}
              cardTitle="Kheerganga Trek"
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
        </TinySlider>
        <button
          type="button"
          className={`${styles.nav__btn} ${styles.nav__btn__prev}`}
          onClick={() => this.onGoTo("prev")}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={styles.socialIcons__item}
          />
        </button>
        <button
          type="button"
          className={`${styles.nav__btn} ${styles.nav__btn__next}`}
          onClick={() => this.onGoTo("next")}
        >
             <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.socialIcons__item}
          />
        </button>
      </div>
    );
  }
}

export default PackagesSection;
